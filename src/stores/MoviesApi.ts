import { FullMovieDto, ShortMovieDto } from '../types.ts'

const baseUrl = import.meta.env.VITE_API_URL

export default abstract class MoviesApi {
  static async fetchAllByTitle(title: string, page = 1) {
    const response = await fetch(`${baseUrl}/search/${encodeURIComponent(title)}/${page}`)
    const json = await response.json()

    if (!response.ok) {
      throw new Error(json.details)
    }

    return json as ShortMovieDto[]
  }

  static async fetchById(id: string) {
    const response = await fetch(`${baseUrl}/movie/${encodeURIComponent(id)}`)
    const json = await response.json()

    if (!response.ok) {
      throw new Error(json.details)
    }

    return json as FullMovieDto
  }
}
