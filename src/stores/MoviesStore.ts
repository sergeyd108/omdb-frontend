import { action, computed, flow, makeAutoObservable, observable } from 'mobx'
import { ShortMovieDto } from '../types.ts'
import MoviesApi from './MoviesApi.ts'

export default class MoviesStore {
  @observable title = ''
  @observable movies: Record<number, ShortMovieDto[]> = {}
  @observable loading = false
  @observable error = ''

  constructor() {
    makeAutoObservable(this)
  }

  @computed
  get lastLoadedPage() {
    const page = Object
      .entries(this.movies)
      .findLast(([, movies]) => movies.length)?.[0]
    return page ? +page : 1
  }

  @action
  setTitle(title: string) {
    this.movies = {}
    this.title = title
  }

  @flow
  *loadMovies(page: number) {
    if (this.title.length < 3) {
      return
    }

    if (this.loading) {
      return
    }

    this.loading = true
    this.error = ''

    try {
      if (!this.movies[page]) {
        this.movies[page] = (yield MoviesApi.fetchAllByTitle(this.title, page)) as ShortMovieDto[]
      }

      if (!this.movies[page + 1]) {
        const movies = (yield MoviesApi.fetchAllByTitle(this.title, page + 1)) as ShortMovieDto[]
        this.movies[page + 1] = movies
      }
    } catch (e) {
      if (e instanceof Error) {
        this.error = e.message
        return
      }
      throw e
    } finally {
      this.loading = false
    }
  }

  getMovies(page: number) {
    return this.movies[page] || []
  }
}
