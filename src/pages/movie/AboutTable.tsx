import { Box, Typography } from '@mui/material'
import { FullMovieDto } from '../../types.ts'

function AboutTableRow({ label, content }: { label: string, content: string }) {
  return (
    <Typography key={label} sx={{ display: 'flex' }} component="div">
      <Typography
        variant="subtitle2"
        color="info.main"
        sx={{ flex: '0 0 100px', fontWeight: 'bold' }}
      >
        {label}
      </Typography>
      <Typography variant="subtitle2">
        {content}
      </Typography>
    </Typography>
  )
}

export default function AboutTable({ movie }: { movie: FullMovieDto }) {
  const rows: Partial<Record<keyof FullMovieDto, string>> = {
    country: 'Country',
    language: 'Language',
    genre: 'Genre',
    writer: 'Writer',
    director: 'Director',
    actors: 'Actors',
    released: 'Released',
    production: 'Production',
    awards: 'Awards',
    metascore: 'Metascore',
    boxOffice: 'Box office',
    dvd: 'DVD',
    website: 'Website',
  }
  const filteredRows = Object.entries(rows).filter(([ key ]) => {
    const value = (movie as any)[key]
    return value && value !== 'N/A'
  })

  return (
    <>
      <Typography variant="h6" mb={0.7}>
        About
      </Typography>
      <Box
        sx={{ display: 'flex', flexDirection: 'column' }}
        pl={1.5}
        pb={2}
        gap={1}
      >
        {filteredRows.map(([ key, label ], index) => {
          const value = (movie as any)[key]
          return (
            <div key={key} style={{ opacity: index % 2 !== 0 ? .7 : .9 }}>
              <AboutTableRow
                label={label}
                content={value}
              />
            </div>
          )
        })}
      </Box>
    </>
  )
}
