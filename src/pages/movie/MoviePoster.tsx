import { Box, CardMedia, styled } from '@mui/material'
import ImdbRating from './ImdbRating.tsx'
import { FullMovieDto } from '../../types.ts'

const StyledCard = styled(Box)(({ theme }) => ({
  background: 'transparent',
  transition: 'transform .3s, box-shadow .3s',
  aspectRatio: '1/1',
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: theme.shadows[6],
  },
  [theme.breakpoints.up('md')]: {
    aspectRatio: '9/16',
  },
}))

export default function MoviePoster({ movie }: { movie: FullMovieDto }) {
  return (
    <StyledCard>
      <CardMedia
        component="img"
        image={movie.poster}
        alt={`${movie.title} Poster`}
        sx={{ height: '100%' }}
      />
      <ImdbRating
        rating={movie.imdbRating}
        votes={movie.imdbVotes}
      />
    </StyledCard>
  )
}
