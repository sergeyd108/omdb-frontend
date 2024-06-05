import { render, screen } from '@testing-library/react'
import { format } from 'date-fns'
import SearchCard from './SearchCard'
import { ReactNode } from 'react'

const mockSearchHistoryItem = {
  query: 'test query',
  timestamp: Date.now(),
}

jest.mock('react-router-dom', () => ({
  Link: ({ children, to }: { children: ReactNode, to: string }) => (
    <a href={to} role="link">{children}</a>
  ),
}))

describe('SearchCard', () => {
  test('renders correctly', () => {
    render(<SearchCard {...mockSearchHistoryItem} />)

    const formattedTimestamp = format(mockSearchHistoryItem.timestamp, 'd LLL yyyy HH:mm')
    const timestampElement = screen.getByText(`on ${formattedTimestamp}`)
    const queryElement = screen.getByText(mockSearchHistoryItem.query)
    const linkElement = screen.getByRole('link')

    expect(queryElement).toBeInTheDocument()
    expect(timestampElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', `/search/${mockSearchHistoryItem.query}`)
  })
})
