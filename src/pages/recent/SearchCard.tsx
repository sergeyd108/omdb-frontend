import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { Card, Typography } from '@mui/material'
import { SearchHistoryItem } from '../../hooks/useRecentSearches.ts'

export default function SearchCard({ query, timestamp }: SearchHistoryItem) {
  return (
    <Link
      type="button"
      to={`/search/${query}`}
      style={{ textDecoration: 'none' }}
    >
      <Card sx={{ display: 'flex', gap: 1, p: 1, pl: 2 }}>
        <Typography variant="subtitle1">
          {query}
        </Typography>
        <Typography variant="subtitle1" color="secondary">
          on {format(timestamp, 'd LLL yyyy HH:mm')}
        </Typography>
      </Card>
    </Link>
  )
}
