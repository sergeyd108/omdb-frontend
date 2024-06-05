import { render, screen } from '@testing-library/react'
import MoviePoster from './MoviePoster'
import { createFullMovieMockData } from '../../../testing/createFullMovieMockData.ts'

describe('MoviePoster', () => {
  test('renders image', () => {
    const mockMovieData = createFullMovieMockData()
    render(<MoviePoster movie={mockMovieData} />)
    const img = screen.getByAltText('Inception Poster')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', mockMovieData.poster)
  })

  test('renders ImdbRating component', () => {
    const mockMovieData = createFullMovieMockData()
    render(<MoviePoster movie={mockMovieData} />)
    expect(screen.getByText('IMDb Rating:')).toBeInTheDocument()
    expect(screen.getByText(mockMovieData.imdbRating)).toBeInTheDocument()
    expect(screen.getByText('| IMDb Votes:')).toBeInTheDocument()
    expect(screen.getByText(mockMovieData.imdbVotes)).toBeInTheDocument()
  })
})
