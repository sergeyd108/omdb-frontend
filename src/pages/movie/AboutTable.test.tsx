import { render, screen } from '@testing-library/react'
import AboutTable from './AboutTable'
import { FullMovieDto } from '../../types.ts'
import { createFullMovieMockData } from '../../../testing/createFullMovieMockData.ts'

const labels = [
  'Country',
  'Language',
  'Genre',
  'Writer',
  'Director',
  'Actors',
  'Released',
  'Production',
  'Awards',
  'Metascore',
  'Box office',
  'DVD',
  'Website',
]

describe('AboutTable', () => {
  test('renders correctly', () => {
    render(<AboutTable movie={createFullMovieMockData()}/>)
    expect(screen.getByText('About')).toBeInTheDocument()
    labels.forEach(label => expect(screen.getAllByText(label).length).toBeGreaterThan(0))
  })

  test('filters out rows with N/A values', () => {
    const movie: FullMovieDto = {
      ...createFullMovieMockData(),
      country: 'N/A',
      language: 'N/A',
    }
    render(<AboutTable movie={movie}/>)
    expect(screen.queryByText('Country')).not.toBeInTheDocument()
    expect(screen.queryByText('Language')).not.toBeInTheDocument()
  })
})
