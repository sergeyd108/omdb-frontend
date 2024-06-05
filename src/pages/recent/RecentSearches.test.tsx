import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import RecentSearches from './RecentSearches'

jest.mock('react-router-dom', () => ({
  Link: ({ children }: { children: ReactNode }) => <div>{children}</div>,
}))

describe('RecentSearches', () => {
  test('renders search list', () => {
    const searches = [
      { query: 'search 1', timestamp: 1623312000000 },
      { query: 'search 2', timestamp: 1623398400000 },
    ]

    render(<RecentSearches searches={searches}/>)
    expect(screen.queryByText(/Your last/)).toBeInTheDocument()
    expect(screen.queryByText('search 1')).toBeInTheDocument()
    expect(screen.queryByText('search 2')).toBeInTheDocument()
  })

  test('does not render search list if nothing found', () => {
    render(<RecentSearches searches={[]}/>)
    expect(screen.queryByText(/Your last/)).toBeNull()
    expect(screen.queryByText('search 1')).toBeNull()
    expect(screen.queryByText('search 2')).toBeNull()
  })
})
