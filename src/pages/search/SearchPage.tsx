import { useEffect } from 'react'
import { observer } from 'mobx-react'
import { useParams } from 'react-router-dom'
import { Box, Grid } from '@mui/material'
import { useMoviesStore } from '../../hooks/useMoviesStore.ts'
import MovieListPagination from './MovieListPagination.tsx'
import SearchResults from './SearchResults.tsx'
import LocalStorageRecentSearches from '../recent/LocalStorageRecentSearches.tsx'

const SearchPage = observer(() => {
  const { title, page } = useParams<'title' | 'page'>()
  const store = useMoviesStore()
  const pageNum = page && !Number.isNaN(+page) && Number.isInteger(+page)
    ? +page
    : 1

  useEffect(() => {
    store.setTitle(title || '')
  }, [ title ])

  useEffect(() => {
    store.loadMovies(pageNum)
  }, [ pageNum, title ])

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Grid container spacing={4}>
        <Grid
          display="flex"
          flexDirection="column"
          xs={12}
          md={8}
          gap={3}
          item
        >
          <SearchResults
            title={store.title}
            loading={store.loading}
            error={store.error}
            movies={store.getMovies(pageNum)}
          />
          <MovieListPagination page={pageNum}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <LocalStorageRecentSearches key={title}/>
        </Grid>
      </Grid>
    </Box>
  )
})

export default SearchPage
