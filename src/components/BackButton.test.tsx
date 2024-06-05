import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { useNavigate } from 'react-router-dom'
import BackButton from './BackButton'

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}))

function mockHistory(idx: number) {
  Object.defineProperty(window, 'history', {
    value: { state: { idx } },
    writable: true,
  })
}

describe('BackButton', () => {
  test('renders correctly', () => {
    mockHistory(1)
    render(<BackButton/>)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  test('navigates back', async () => {
    const navigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigate)
    mockHistory(1)
    render(<BackButton/>)

    const button = screen.getByRole('button')
    await userEvent.click(button)
    expect(navigate).toHaveBeenCalledWith(-1)
  })

  test('does not render if no history', () => {
    mockHistory(0)
    const { container } = render(<BackButton/>)
    expect(container.firstChild).toBeNull()
  })
})
