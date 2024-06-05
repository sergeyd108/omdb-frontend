import { Typography } from '@mui/material'

export default function MovieNotFound() {
  return (
    <Typography color="error.dark" variant="body1">
      Requested movie was not found.
    </Typography>
  )
}
