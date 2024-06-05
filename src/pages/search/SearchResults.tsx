import { Box, Typography } from '@mui/material'
import LoadingSkeleton from './LoadingSkeleton.tsx'
import ErrorText from '../../components/ErrorText.tsx'
import MovieCard from './MovieCard.tsx'
import NoResults from './NoResults.tsx'
import { ShortMovieDto } from '../../types.ts'

interface Props {
  title: string
  loading: boolean
  error: string
  movies: ShortMovieDto[]
}

export default function SearchResults({ title, loading, error, movies }: Props) {
  return (
    <>
      <Typography variant="h4">
        Search "{title}"
      </Typography>
      {loading ? (
        <LoadingSkeleton/>
      ) : error ? (
        <ErrorText text={error}/>
      ) : (
        <Box
          sx={{ display: 'flex', flexDirection: 'column' }}
          gap={1}
        >
          {movies.length ? (
            movies.map(movie => (
              <MovieCard key={movie.imdbID} movie={movie}/>
            ))
          ) : (
            <NoResults title={title}/>
          )}
        </Box>
      )}
    </>
  )
}
