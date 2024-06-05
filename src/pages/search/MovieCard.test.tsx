import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import MovieCard from './MovieCard'
import { ShortMovieDto } from '../../types.ts'

const movie: ShortMovieDto = {
  imdbID: 'tt1234567',
  poster: 'https://example.com/poster.jpg',
  title: 'Test Movie',
  type: 'movie',
  year: '2021',
}

jest.mock('react-router-dom', () => ({
  Link: ({ children, to }: { children: ReactNode, to: string }) => (
    <a href={to} role="link">{children}</a>
  ),
}))

describe('MovieCard', () => {
  test('renders correctly', () => {
    render(<MovieCard movie={movie}/>)

    const linkElement = screen.getByRole('link')
    expect(linkElement).toHaveAttribute('href', `/movie/${movie.imdbID}`)

    const imageElement = screen.getByRole('img')
    expect(imageElement).toHaveAttribute('src', movie.poster)
    expect(imageElement).toHaveAttribute('alt', 'Movie poster')

    const titleElement = screen.getByText(movie.title)
    expect(titleElement).toBeInTheDocument()

    const yearElement = screen.getByText(movie.year)
    expect(yearElement).toBeInTheDocument()
  })

  test('link navigates to the correct URL', () => {
    render(<MovieCard movie={movie}/>)
    const linkElement = screen.getByRole('link')
    expect(linkElement).toHaveAttribute('href', `/movie/${movie.imdbID}`)
  })
})
