import { Box, Button, Tooltip } from '@mui/material'
import { Link } from 'react-router-dom'
import { Home } from '@mui/icons-material'

export default function HomeButton() {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <Tooltip title="Go home">
        <Button
          variant="outlined"
          color="secondary"
          sx={{
            display: 'flex',
            gap: 1,
            textWrap: 'nowrap',
            textTransform: 'none',
            height: '40px',
            minWidth: 'auto',
          }}
        >
          <Home fontSize="small"/>
          <Box sx={theme => ({
            display: 'none',
            [theme.breakpoints.up('md')]: {
              display: 'inline',
            },
          })}>
            OMDb View
          </Box>
        </Button>
      </Tooltip>
    </Link>
  )
}
