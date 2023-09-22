import { Card, ApiMovieProps } from '@/components/Card'
import { ListLayout } from '@/components/ListLayout'

import { getNowPlayingMovies } from '@/services/getData'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Snack Studio - Now Playing Movies',
}

export default async function NowPlaying() {
  const movies = await getNowPlayingMovies()

  return (
    <ListLayout
      headline="Now Playing Movies"
      subHeadline="Discover which movies are currently on display"
    >
      {movies.map((movie: ApiMovieProps) => {
        return (
          <Card
            id={movie.id}
            key={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            voteAverage={movie.vote_average}
          />
        )
      })}
    </ListLayout>
  )
}
