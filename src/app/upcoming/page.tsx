import { Card, ApiMovieProps } from '@/components/Card'
import { ListLayout } from '@/components/ListLayout'
import { getUpcoming } from '@/services/getData'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Snack Studio - Upcoming Movies',
}

export default async function Upcoming() {
  const movies = await getUpcoming()
  return (
    <ListLayout
      headline="Upcoming Movies"
      subHeadline="Stay tuned for upcoming releases"
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
