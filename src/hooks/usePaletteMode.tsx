import { createContext, ReactNode, useContext, useState } from 'react'
import { createTheme, CssBaseline, PaletteMode, ThemeProvider } from '@mui/material'

interface UsePaletteModeReturn {
  paletteMode: PaletteMode
  togglePaletteMode: () => void
}

const PaletteModeContext = createContext<UsePaletteModeReturn | undefined>(undefined)

export function usePaletteMode() {
  const context = useContext(PaletteModeContext)

  if (!context) {
    throw new Error('usePaletteMode must be used within a MuiThemeProvider.')
  }

  return context
}

export function MuiThemeProvider({ children }: { children: ReactNode }) {
  const [ paletteMode, setMode ] = useState<PaletteMode>('dark')
  const theme = createTheme({
    palette: {
      mode: paletteMode,
      primary: { main: '#eee' },
      secondary: { main: '#888' },
      info: { main: '#0481bf' },
    },
  })

  function togglePaletteMode() {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
  }

  return (
    <PaletteModeContext.Provider value={{ paletteMode, togglePaletteMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme/>
        {children}
      </ThemeProvider>
    </PaletteModeContext.Provider>
  )
}
