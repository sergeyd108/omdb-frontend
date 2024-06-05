import React, { useCallback, useState } from 'react'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import { Search } from '@mui/icons-material'

interface Props {
  onSubmit: (query: string) => void
}

export default function SearchInput({ onSubmit }: Props) {
  const [ query, setQuery ] = useState('')
  const handleSubmit = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSubmit(query)
    }
  }, [ onSubmit, query ])

  return (
    <TextField
      variant="outlined"
      placeholder="Search for movies"
      inputMode="search"
      size="small"
      sx={{ maxWidth: 'sm' }}
      value={query}
      onChange={event => setQuery(event.target.value)}
      onKeyUp={handleSubmit}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              color="secondary"
              sx={{ mr: -1 }}
              onClick={() => onSubmit(query)}
            >
              <Search/>
            </IconButton>
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  )
}
