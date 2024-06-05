import { Typography } from '@mui/material'
import pluralize from 'pluralize'
import { FullMovieDto } from '../../types.ts'

function MovieType({ type }: { type: string }) {
  return (
    <span style={{ textTransform: 'capitalize' }}>
      {type}
    </span>
  )
}

function SeasonsText({ movie }: { movie: FullMovieDto }) {
  if (movie.type === 'series' && movie.totalSeasons) {
    return (
      <span>
        {pluralize('season', +movie.totalSeasons, true)} |
      </span>
    )
  }
}

export default function MovieKeyInfo({ movie }: { movie: FullMovieDto }) {
  return (
    <Typography
      variant="subtitle2"
      color="info.main"
      sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, fontWeight: 'bold' }}
      gutterBottom
    >
      <MovieType type={movie.type}/> |
      <SeasonsText movie={movie}/>
      <span>{movie.year}</span> |
      {movie.rated !== 'N/A' && (
        <span>Rated {movie.rated} |</span>
      )}
      <span>{movie.runtime}</span>
    </Typography>
  )
}
