import { useEffect, useState } from 'react'
import { FullMovieDto } from '../types.ts'
import MoviesApi from '../stores/MoviesApi.ts'

export function useMovieLoader(movieId: string) {
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState('')
  const [ movie, setMovie ] = useState<FullMovieDto>()

  useEffect(() => {
    setLoading(true)

    MoviesApi
      .fetchById(movieId)
      .then(setMovie)
      .catch(e => {
        if (e instanceof Error) {
          setError(e.message)
          return
        }
        throw e
      })
      .finally(() => setLoading(false))
  }, [ movieId ])

  return { loading, error, movie }
}
