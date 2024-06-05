import { Typography } from '@mui/material'
import { Star } from '@mui/icons-material'

interface Props {
  rating: string
  votes: string
}

export default function ImdbRating({ rating, votes }: Props) {
  return (
    <Typography
      variant="subtitle1"
      color="info.main"
      sx={{ display: 'flex', gap: 1, mt: 1 }}
    >
      <Star color="warning"/>
      <span>IMDb Rating:</span>
      <span>{rating}</span>
      <span>| IMDb Votes:</span>
      <span>{votes}</span>
    </Typography>
  )
}
