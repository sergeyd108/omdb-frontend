import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { ReactNode } from 'react'
import HomeButton from './HomeButton'

jest.mock('react-router-dom', () => ({
  Link: ({ children }: { children: ReactNode }) => <div>{children}</div>,
}))

describe('HomeButton', () => {
  test('renders correctly', () => {
    render(<HomeButton/>)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  test('redirects to home page', async () => {
    render(<HomeButton/>)
    const button = screen.getByRole('button')
    await userEvent.click(button)
    expect(window.location.pathname).toBe('/')
  })
})
