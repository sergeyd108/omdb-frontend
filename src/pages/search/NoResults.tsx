import { Typography } from '@mui/material'

interface Props {
  title: string
}

export default function NoResults({ title }: Props) {
  return (
    <Typography color="error">
      No results were found for "{title}"; please try different keywords or check the spelling.
    </Typography>
  )
}
