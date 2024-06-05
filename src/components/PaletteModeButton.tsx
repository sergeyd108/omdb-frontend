import { IconButton, Tooltip } from '@mui/material'
import { DarkMode, LightMode } from '@mui/icons-material'
import { usePaletteMode } from '../hooks/usePaletteMode.tsx'

export default function PaletteModeButton() {
  const { paletteMode, togglePaletteMode } = usePaletteMode()
  const title = paletteMode === 'dark'
    ? 'Switch to light mode'
    : 'Switch to dark mode'

  return (
    <Tooltip title={title}>
      <IconButton
        onClick={togglePaletteMode}
      >
        {paletteMode === 'dark' ? (
          <DarkMode/>
        ) : (
          <LightMode/>
        )}
      </IconButton>
    </Tooltip>
  )
}
