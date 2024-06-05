import { useParams } from 'react-router-dom'
import { Box, styled } from '@mui/material'
import { useMovieLoader } from '../../hooks/useMovieLoader.ts'
import LoadingSkeleton from './LoadingSkeleton.tsx'
import ErrorText from '../../components/ErrorText.tsx'
import MovieMainInfo from './MovieMainInfo.tsx'
import MovieNotFound from './MovieNotFound.tsx'
import LocalStorageRecentSearches from '../recent/LocalStorageRecentSearches.tsx'

const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    width: 'calc(100% / 12 * 5)',
  },
}))

export default function MoviePage() {
  const { id } = useParams<'id'>()
  const { movie, loading, error } = useMovieLoader(id!)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {loading ? (
        <LoadingSkeleton/>
      ) : error ? (
        <ErrorText text={error}/>
      ) : !movie ? (
        <MovieNotFound/>
      ) : (
        <MovieMainInfo movie={movie}/>
      )}
      <StyledBox>
        <LocalStorageRecentSearches/>
      </StyledBox>
    </Box>
  )
}
