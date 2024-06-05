import { AppBar, Box, Container, Toolbar } from '@mui/material'
import AppSearchInput from './AppSearchInput.tsx'
import PaletteModeButton from './PaletteModeButton.tsx'
import HomeButton from './HomeButton.tsx'
import BackButton from './BackButton.tsx'

export default function MainAppBar() {
  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <BackButton/>
          <HomeButton/>
          <AppSearchInput/>
          <Box flexGrow={1}/>
          <PaletteModeButton/>
        </Container>
      </Toolbar>
    </AppBar>
  )
}
