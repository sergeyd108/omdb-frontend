import { render, screen } from '@testing-library/react'
import MovieKeyInfo from './MovieKeyInfo'
import { createFullMovieMockData } from '../../../testing/createFullMovieMockData.ts'

describe('MovieKeyInfo', () => {
  test('renders correctly', () => {
    render(<MovieKeyInfo movie={createFullMovieMockData()}/>)
    expect(screen.getByText('2010')).toBeInTheDocument()
    expect(screen.getByText('148 min')).toBeInTheDocument()
    expect(screen.getByText(/Rated PG-13/)).toBeInTheDocument()
  })

  test('renders correctly for a series', () => {
    const movie = { ...createFullMovieMockData(), type: 'series' as const, totalSeasons: '3' }
    render(<MovieKeyInfo movie={movie}/>)
    expect(screen.getByText(/3 seasons/)).toBeInTheDocument()
    expect(screen.getByText('2010')).toBeInTheDocument()
    expect(screen.getByText('148 min')).toBeInTheDocument()
  })
})
