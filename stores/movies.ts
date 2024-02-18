import { defineStore } from 'pinia'
import axios from 'axios'
import type { IMovie, IMovieForm, IMovieSearch } from '../interfaces'

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    movies: null as IMovie[] | IMovieSearch | null,
    currentMovie: {} as IMovie,
    recommendedMovies: [{ "Title": "Confessions of a Teenage Drama Queen", "Year": "2004", "imdbID": "tt0361467", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTIzMDE0MDQ5Ml5BMl5BanBnXkFtZTcwNTUwMDUyMQ@@._V1_SX300.jpg" }, { "Title": "Total Drama", "Year": "2007–2014", "imdbID": "tt1173427", "Type": "series", "Poster": "https://m.media-amazon.com/images/M/MV5BMTRlMWU4YjktNWM5My00ZmI5LWE4NWEtNDRmNGMxNDIxYjEwXkEyXkFqcGdeQXVyOTQ1MjE4OTE@._V1_SX300.jpg" }, { "Title": "A Woman of Paris: A Drama of Fate", "Year": "1923", "imdbID": "tt0014624", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BYWRkMmQwYjEtZjE2Yi00ZDA0LThjZTUtZmI1N2M1ZGY1ZTJkXkEyXkFqcGdeQXVyMzExODEzNDA@._V1_SX300.jpg" }, { "Title": "Kim Possible: So the Drama", "Year": "2005", "imdbID": "tt0446724", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BZjc0ZGQ3OWQtYjA5ZC00YzNkLWJkNDctNDEzNzg0YTEzYjYwXkEyXkFqcGdeQXVyMTIwMjY0NjQz._V1_SX300.jpg" }, { "Title": "Eating Out: Drama Camp", "Year": "2011", "imdbID": "tt1833845", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTM2NTI0ODE4NF5BMl5BanBnXkFtZTcwMTE0NTE2Nw@@._V1_SX300.jpg" }, { "Title": "Total Drama All Stars", "Year": "2013–2014", "imdbID": "tt3177810", "Type": "series", "Poster": "https://m.media-amazon.com/images/M/MV5BMDEyNGZiOTgtNWIxMS00NTkzLWFiN2YtYzE2MmY4ZjZlOGY1XkEyXkFqcGdeQXVyNzI1MDI1NDU@._V1_SX300.jpg" }, { "Title": "Total Drama Presents: The Ridonculous Race", "Year": "2015", "imdbID": "tt3787754", "Type": "series", "Poster": "https://m.media-amazon.com/images/M/MV5BYWZiNTAyYzYtNWM3Yy00NTcwLWFhMTMtYmUyN2U5NTAyZjdiXkEyXkFqcGdeQXVyNjAwMDg5NTc@._V1_SX300.jpg" }, { "Title": "Total Drama Revenge of the Island", "Year": "2012", "imdbID": "tt2733534", "Type": "series", "Poster": "https://m.media-amazon.com/images/M/MV5BMjI0NTExNDA4NF5BMl5BanBnXkFtZTgwODQ3ODAxMzE@._V1_SX300.jpg" }, { "Title": "Love Action Drama", "Year": "2019", "imdbID": "tt7117870", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BOTM1MTE2YzAtNDYxMS00YjY1LWIyYWUtNWUzNzQ0YTQzYzU4XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_SX300.jpg" }, { "Title": "Drama/Mex", "Year": "2006", "imdbID": "tt0808237", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMzJiZTk2MTEtZDZmMC00ZmJkLWE5NzAtYTMyMDI2MzdkODBiXkEyXkFqcGdeQXVyMzY0MTY2MDA@._V1_SX300.jpg" }]
  }),
  actions: {
    async getMovies(s?: string) {
      const { data } = await axios.get(`https://www.omdbapi.com/?apikey=a881b325`, { params: { s } })
      
      if(Object.hasOwnProperty(data.Search)) {
        this.movies = data.Search
      } else {
        this.movies = data  
      }    
    },
    async getMovie(id: string) {
      const { data } = await axios.get(`https://www.omdbapi.com/?apikey=a881b325`, { params: { i: id } })
      this.currentMovie = data
    },
    
    async createMovie(form: IMovieForm) {
      await axios.post('https://www.omdbapi.com/?apikey=a881b325', form)
    }
  }
})