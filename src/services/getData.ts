import { api } from '@/lib/axios'

export async function getHomeMovies() {
  const response = await api.get('movie/popular', {
    params: {
      api_key: '5d5a276bab6970c04262855a3a6bb946',
      language: 'en-US',
      page: 1,
    },
  })

  const movies = await response.data.results.slice(0, 3)

  return movies
}

export async function getNowPlayingMovies() {
  const response = await api.get('movie/now_playing', {
    params: {
      api_key: '5d5a276bab6970c04262855a3a6bb946',
      language: 'en-US',
      page: 1,
    },
  })

  const movies = response.data.results

  return movies
}

export async function getPopularMovies() {
  const response = await api.get('movie/popular', {
    params: {
      api_key: '5d5a276bab6970c04262855a3a6bb946',
      language: 'en-US',
      page: 1,
    },
  })

  const movies = response.data.results

  return movies
}

export async function getTopRatedMovies() {
  const response = await api.get('movie/top_rated', {
    params: {
      api_key: '5d5a276bab6970c04262855a3a6bb946',
      language: 'en-US',
      page: 1,
    },
  })

  const movies = response.data.results

  return movies
}

export async function getUpcoming() {
  const response = await api.get('movie/upcoming', {
    params: {
      api_key: '5d5a276bab6970c04262855a3a6bb946',
      language: 'en-US',
      page: 1,
    },
  })

  const movies = response.data.results

  return movies
}

export async function getMovieById(movieId: string) {
  const response = await api.get(`movie/${movieId}`, {
    params: {
      api_key: '5d5a276bab6970c04262855a3a6bb946',
      language: 'en-US',
    },
  })

  const genericMovie = response.data
  const movie = {
    title: genericMovie.title,
    id: genericMovie.id,
    posterPath: genericMovie.poster_path,
    overview: genericMovie.overview,
    backdropPath: genericMovie.backdrop_path,
    voteAverage: genericMovie.vote_average,
    releaseDate: genericMovie.release_date,
    favorite: false,
  }

  return movie
}
