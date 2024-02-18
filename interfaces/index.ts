export interface IMovie {
  Title: string
  Type: string
  Year: string
  imdbID?: string
  Poster: string
}

export interface IMovieForm {
  Title: string
  Type: string
  Year: string
  Poster: string
}

export interface IMovieSearch {
  Search?: IMovie[]
  Response: string
  totalResults?: string
  Error?: string
}