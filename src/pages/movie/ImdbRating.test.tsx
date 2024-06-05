import { render, screen } from '@testing-library/react'
import ImdbRating from './ImdbRating'

describe('ImdbRating', () => {
  test('renders correctly', () => {
    render(<ImdbRating rating="8.8" votes="2,012,345" />)
    expect(screen.getByText('IMDb Rating:')).toBeInTheDocument()
    expect(screen.getByText('8.8')).toBeInTheDocument()
    expect(screen.getByText('| IMDb Votes:')).toBeInTheDocument()
    expect(screen.getByText('2,012,345')).toBeInTheDocument()
  })

  test('renders Star icon', () => {
    render(<ImdbRating rating="8.8" votes="2,012,345" />)
    const starIcon = screen.getByTestId('StarIcon')
    expect(starIcon).toBeInTheDocument()
  })
})
