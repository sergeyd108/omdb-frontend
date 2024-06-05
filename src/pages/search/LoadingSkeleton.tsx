import { Box, Skeleton } from '@mui/material'

export default function LoadingSkeleton() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      {[ ...Array(10) ].map((_, i) => (
        <Skeleton
          key={i}
          height={120}
          animation="wave"
          variant="rectangular"
        />
      ))}
    </Box>
  )
}
