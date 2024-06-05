export interface ShortMovieDto {
  imdbID: string
  type: 'movie' | 'series' | 'episode'
  title: string
  year: string
  poster: string
}

export interface FullMovieDto extends ShortMovieDto {
  rated: string
  released: string
  runtime: string
  genre: string
  director: string
  writer: string
  actors: string
  plot: string
  language: string
  country: string
  awards: string
  metascore: string
  imdbRating: string
  imdbVotes: string
  response: string
  ratings: MovieRatingDto[]
  dvd?: string
  boxOffice?: string
  production?: string
  website?: string
  totalSeasons?: string
}

export interface MovieRatingDto {
  source: string
  value: string
}
