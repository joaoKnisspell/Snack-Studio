import { Card, ApiMovieProps } from '@/components/Card'
import { ListLayout } from '@/components/ListLayout'

import { getTopRatedMovies } from '@/services/getData'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Snack Studio - Top Rated Movies',
}

export default async function TopRated() {
  const movies = await getTopRatedMovies()

  return (
    <ListLayout
      subHeadline="Check out the highest-rated movies worldwide"
      headline="Top Rated Movies"
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
