import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import PaletteModeButton from './PaletteModeButton'
import { usePaletteMode } from '../hooks/usePaletteMode'

jest.mock('../hooks/usePaletteMode', () => ({
  usePaletteMode: jest.fn(),
}))

describe('PaletteModeButton', () => {
  const togglePaletteMode = jest.fn()

  beforeEach(() => {
    (usePaletteMode as jest.Mock).mockReturnValue({
      paletteMode: 'dark',
      togglePaletteMode,
    })
  })

  it('renders correctly', () => {
    render(<PaletteModeButton/>)
    const button = screen.getByRole('button')
    const darkIcon = screen.getByTestId('DarkModeIcon')
    expect(button).toBeInTheDocument()
    expect(button).toContainElement(darkIcon)
  })

  it('toggles palette mode on button click', async () => {
    render(<PaletteModeButton/>)
    const button = screen.getByRole('button')
    await userEvent.click(button)
    expect(togglePaletteMode).toHaveBeenCalledTimes(1)
  })
})
