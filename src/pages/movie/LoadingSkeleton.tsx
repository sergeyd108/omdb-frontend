import { Grid, Skeleton, Typography } from '@mui/material'

export default function LoadingSkeleton() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={5}>
        <Skeleton
          variant="rounded"
          width="100%"
          height="100%"
          sx={theme => ({
            aspectRatio: '1/1',
            [theme.breakpoints.up('md')]: {
              aspectRatio: '9/16',
            },
          })}/>
      </Grid>
      <Grid item xs={12} md={7}>
        <Typography variant="h4">
          <Skeleton variant="rounded"/>
        </Typography>
        <Typography variant="subtitle2" my={2}>
          <Skeleton variant="rounded"/>
        </Typography>
        <Skeleton variant="rounded" height={300}/>
        <Typography variant="body1" mt={2}>
          <Skeleton variant="rounded" height={80}/>
        </Typography>
      </Grid>
    </Grid>
  )
}
