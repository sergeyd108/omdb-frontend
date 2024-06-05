import { useNavigate } from 'react-router-dom'
import { IconButton, Tooltip } from '@mui/material'
import { ChevronLeftTwoTone } from '@mui/icons-material'

export default function BackButton() {
  const navigate = useNavigate()

  if (history.state.idx === 0) {
    return
  }

  return (
    <Tooltip title="Go back">
      <IconButton onClick={() => navigate(-1)}>
        <ChevronLeftTwoTone/>
      </IconButton>
    </Tooltip>
  )
}
