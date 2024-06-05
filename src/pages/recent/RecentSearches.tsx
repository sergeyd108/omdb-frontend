import { Box, Grid, Typography } from '@mui/material'
import pluralize from 'pluralize'
import SearchCard from './SearchCard.tsx'

interface SearchItem {
  query: string
  timestamp: number
}

interface Props {
  searches: SearchItem[]
}

export default function RecentSearches({ searches }: Props) {
  if (!searches.length) {
    return
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, py: 2 }}>
      <Typography variant="h6">
        Your last {pluralize('query', searches.length, true)}
      </Typography>
      <Grid spacing={1.5} container direction="column">
        {searches.map(({ query, timestamp }) => (
          <Grid key={query + timestamp} xs={12} md={6} item>
            <SearchCard
              query={query}
              timestamp={timestamp}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
