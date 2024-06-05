import { Pagination } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useMoviesStore } from '../../hooks/useMoviesStore.ts'

interface Props {
  page: number
}

export default function MovieListPagination({ page }: Props) {
  const store = useMoviesStore()
  const navigate = useNavigate()

  function handleChange(_: any, page: number) {
    navigate(`/search/${store.title}/${page}`)
  }

  return (
    <Pagination
      count={store.lastLoadedPage}
      page={page}
      boundaryCount={1}
      onChange={handleChange}
    />
  )
}
