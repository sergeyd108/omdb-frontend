import { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'
import MainAppBar from './components/MainAppBar.tsx'
import { MuiThemeProvider } from './hooks/usePaletteMode.tsx'

export default function AppLayout({ children }: { children?: ReactNode }) {
  return (
    <MuiThemeProvider>
      <MainAppBar/>
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <Outlet/>
        {children}
      </Container>
    </MuiThemeProvider>
  )
}
