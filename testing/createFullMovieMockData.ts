import { FullMovieDto } from '../src/types'

export const createFullMovieMockData: () => FullMovieDto = () => ({
  imdbID: 'tt1375666',
  type: 'movie',
  title: 'Inception',
  year: '2010',
  poster: 'https://example.com/inception.jpg',
  rated: 'PG-13',
  released: '2010-07-16',
  runtime: '148 min',
  genre: 'Action, Adventure, Sci-Fi',
  director: 'Christopher Nolan',
  writer: 'Christopher Nolan',
  actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page',
  plot: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
  language: 'English, Japanese, French',
  country: 'USA, UK',
  awards: 'Won 4 Oscars. Another 152 wins & 204 nominations.',
  metascore: '74',
  imdbRating: '8.8',
  imdbVotes: '2,012,345',
  response: 'True',
  ratings: [
    {
      source: 'Internet Movie Database',
      value: '8.8/10',
    },
    {
      source: 'Rotten Tomatoes',
      value: '87%',
    },
    {
      source: 'Metacritic',
      value: '74/100',
    },
  ],
  dvd: '2010-12-07',
  boxOffice: '$829,895,144',
  production: 'Warner Bros. Pictures',
  website: 'http://inceptionmovie.warnerbros.com/',
})
