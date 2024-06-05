import { Grid, Typography } from '@mui/material'
import { FullMovieDto } from '../../types.ts'
import AboutTable from './AboutTable.tsx'
import MovieKeyInfo from './MovieKeyInfo.tsx'
import MoviePoster from './MoviePoster.tsx'

export default function MovieMainInfo({ movie }: { movie: FullMovieDto }) {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={5}>
        <MoviePoster movie={movie}/>
      </Grid>
      <Grid item xs={12} md={7}>
        <Typography variant="h4" gutterBottom>
          {movie.title}
        </Typography>
        <MovieKeyInfo movie={movie}/>
        <AboutTable movie={movie}/>
        <Typography variant="body1" paragraph>
          {movie.plot}
        </Typography>
      </Grid>
    </Grid>
  )
}
