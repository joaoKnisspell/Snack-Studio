import { Card, ApiMovieProps } from '@/components/Card'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { getHomeMovies } from '@/services/getData'

export default async function Home() {
  const movies = await getHomeMovies()
  return (
    <div className="h-full w-full  text-text">
      <div className="mt-10 grid min-h-screen flex-col items-end gap-8 bg-[url('/bg-2.jpg')]  bg-cover bg-center md:grid-rows-4 lg:mt-0">
        <div className="row-span-3 row-start-2 flex w-full justify-center bg-gray-900 bg-opacity-10 bg-clip-padding px-6 py-6 backdrop-blur-xl backdrop-filter">
          <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-8 xl:justify-evenly xl:gap-2 home:flex-row">
            <div className="flex max-w-xs flex-col gap-1 xl:flex 2xl:max-w-md">
              <h3 className="text-2xl font-bold">Movies You Must Watch</h3>
              <span className="text-xl">
                Here is a meticulously curated selection of the finest movies
                you absolutely cannot afford to miss, thoughtfully assembled by
                the experts at Snack Studio.
              </span>
              <ArrowRight className="hidden h-10 w-10 home:flex" />
              <ArrowDown className="hidden h-10 w-10 self-center lg:flex home:hidden" />
            </div>
            <div className="flex w-full flex-wrap items-end justify-evenly gap-8 lg:w-auto lg:justify-end ">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
