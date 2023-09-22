import { Card, ApiMovieProps } from '@/components/Card'
import { ListLayout } from '@/components/ListLayout'
import { getPopularMovies } from '@/services/getData'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Snack Studio - Popular Movies',
}

export default async function Popular() {
  const movies = await getPopularMovies()

  return (
    <ListLayout
      subHeadline="Explore the most popular movies selected by the community"
      headline="Popular Movies"
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
