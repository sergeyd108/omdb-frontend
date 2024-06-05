import MoviesStore from '../stores/MoviesStore.ts'

const moviesStore = new MoviesStore()

export function useMoviesStore() {
  return moviesStore
}
