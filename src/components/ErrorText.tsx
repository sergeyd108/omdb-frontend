import { Typography } from '@mui/material'

export default function ErrorText({ text }: { text: string }) {
  return (
    <Typography variant="body1" color="error.dark">
      An error occurred while processing your request: {text}
    </Typography>
  )
}
