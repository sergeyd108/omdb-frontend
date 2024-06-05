import { ShortMovieDto } from '../types'
import MoviesApi from './MoviesApi'
import MoviesStore from './MoviesStore'

const movies: ShortMovieDto[] = [
  {
    imdbID: 'tt1234567',
    type: 'movie',
    title: 'Mock Movie',
    year: '2020',
    poster: 'https://example.com/poster1.jpg',
  },
  {
    imdbID: 'tt2345678',
    type: 'series',
    title: 'Mock Series',
    year: '2019-2021',
    poster: 'https://example.com/poster2.jpg',
  },
  {
    imdbID: 'tt3456789',
    type: 'episode',
    title: 'Mock Episode',
    year: '2021',
    poster: 'https://example.com/poster3.jpg',
  },
]

jest.mock('./MoviesApi', () => ({
  fetchAllByTitle: jest.fn(),
}))

describe('MoviesStore', () => {
  let store: MoviesStore

  beforeEach(() => {
    store = new MoviesStore()
  })

  test('initializes with default values', () => {
    expect(store.title).toBe('')
    expect(store.movies).toEqual({})
    expect(store.loading).toBe(false)
    expect(store.error).toBe('')
  })

  test('lastLoadedPage returns correct page number', () => {
    expect(store.lastLoadedPage).toBe(1)

    store.movies = { 1: movies }
    expect(store.lastLoadedPage).toBe(1)

    store.movies = { 1: movies, 2: movies }
    expect(store.lastLoadedPage).toBe(2)
  })

  test('setTitle sets title and clears movies', () => {
    store.movies = { 1: movies }
    store.setTitle('New Title')
    expect(store.title).toBe('New Title')
    expect(store.movies).toEqual({})
  })

  test('loadMovies does nothing if title is less than 3 characters', async () => {
    store.title = 'ab'
    await store.loadMovies(1)
    expect(MoviesApi.fetchAllByTitle).not.toHaveBeenCalled()
  })

  test('loadMovies sets loading and error states', async () => {
    store.title = 'Test';
    (MoviesApi.fetchAllByTitle as jest.Mock).mockReturnValue(movies)
    const loadMoviesPromise = store.loadMovies(1)

    expect(store.loading).toBe(true)
    expect(store.error).toBe('')

    await loadMoviesPromise

    expect(store.loading).toBe(false)
    expect(store.movies[1]).toEqual(movies)
    expect(store.movies[2]).toEqual(movies)
  })

  test('loadMovies sets error state', async () => {
    store.title = 'Test'
    const errorMessage = 'Failed to fetch movies';
    (MoviesApi.fetchAllByTitle as jest.Mock).mockRejectedValueOnce(new Error(errorMessage))

    await store.loadMovies(1)

    expect(store.loading).toBe(false)
    expect(store.error).toBe(errorMessage)
  })

  test('getMovies returns movies', () => {
    store.movies = { 1: movies }
    expect(store.getMovies(1)).toEqual(movies)
    expect(store.getMovies(2)).toEqual([])
  })
})
