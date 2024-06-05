import { Link } from 'react-router-dom'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { ShortMovieDto } from '../../types.ts'

export default function MovieCard({ movie }: { movie: ShortMovieDto }) {
  return (
    <Link
      to={`/movie/${movie.imdbID}`}
      style={{ textDecoration: 'none' }}
    >
      <Card sx={{ display: 'flex' }}>
        <CardMedia
          component="img"
          sx={{ width: 80, height: 120 }}
          image={movie.poster}
          alt="Movie poster"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6">
            {movie.title}
          </Typography>
          <Typography variant="subtitle1" color="secondary">
            <span style={{ textTransform: 'capitalize' }}>
              {movie.type}
            </span>
            <span style={{ margin: '0 6px' }}>|</span>
            <span>
              {movie.year}
            </span>
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}
