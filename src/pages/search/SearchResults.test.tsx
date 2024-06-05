import { render, screen } from '@testing-library/react'
import SearchResults from './SearchResults'
import { ShortMovieDto } from '../../types.ts'

jest.mock('./LoadingSkeleton.tsx', () => () => <div>Loading...</div>)
jest.mock('../../components/ErrorText.tsx', () => ({ text }: { text: string }) => <div>{text}</div>)
jest.mock('./MovieCard.tsx', () => ({ movie }: { movie: ShortMovieDto }) => <div>{movie.title}</div>)
jest.mock('./NoResults.tsx', () => ({ title }: { title: string }) => <div>No results for {title}</div>)

describe('SearchResults', () => {
  const title = 'Inception'
  const movies: ShortMovieDto[] = [
    { imdbID: '1', title: 'Inception', year: '2010', type: 'movie', poster: 'N/A' },
    { imdbID: '2', title: 'Interstellar', year: '2014', type: 'movie', poster: 'N/A' },
  ]

  test('renders title', () => {
    render(<SearchResults title={title} loading={false} error="" movies={movies}/>)
    expect(screen.getByText(`Search "${title}"`)).toBeInTheDocument()
  })

  test('renders loading state', () => {
    render(<SearchResults title={title} loading={true} error="" movies={[]}/>)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  test('renders error state', () => {
    const error = 'Failed to fetch data'
    render(<SearchResults title={title} loading={false} error={error} movies={[]}/>)
    expect(screen.getByText(error)).toBeInTheDocument()
  })

  test('renders no results state', () => {
    render(<SearchResults title={title} loading={false} error="" movies={[]}/>)
    expect(screen.getByText(`No results for ${title}`)).toBeInTheDocument()
  })

  test('renders movie list', () => {
    render(<SearchResults title={title} loading={false} error="" movies={movies}/>)
    expect(screen.getByText('Inception')).toBeInTheDocument()
    expect(screen.getByText('Interstellar')).toBeInTheDocument()
  })
})
