import { Calendar, Film, Globe2, Play, Star } from 'lucide-react'
import { getMovieById } from '@/services/getData'

interface MovieProps {
  params: {
    movieId: string
  }
}

export async function generateMetadata({ params }: MovieProps) {
  const movie = await getMovieById(params.movieId)
  return { title: `Snack Studio - ${movie.title}` }
}

export default async function Movie({ params }: MovieProps) {
  const movie = await getMovieById(params.movieId)

  return (
    <div className="mt-16 grid h-screen grid-rows-movie overflow-x-hidden pb-8 md:mt-0 md:h-screen">
      <div
        className="min-h-[50vh] w-full bg-cover bg-center md:min-h-0"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdropPath})`,
        }}
      ></div>
      <div className="-mt-7 flex h-full w-screen flex-col px-4 md:px-10 lg:mx-auto lg:-mt-11 lg:w-full xl:px-20">
        <div className="w-full lg:mx-auto lg:max-w-7xl">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-5xl font-semibold text-white lg:text-6xl">
              {movie.title}
            </h1>
            <a
              href={`https://www.youtube.com/results?search_query=${movie.title} trailer`}
              target="blank"
              className="group mt-0.5 hidden h-20 w-20 items-center justify-center rounded-full border-2 border-teal-400 bg-zinc-900 hover:border-teal-500 lg:flex"
            >
              <Play
                className="ml-1.5 h-11 w-11 text-teal-400"
                fill="rgba(45 212 191)"
              />
            </a>
          </div>
          <div className="mb-6 mt-3 flex w-full flex-wrap gap-6 gap-y-2 text-lg text-zinc-500">
            <div className="flex items-center gap-2">
              <Calendar className="h-7 w-7" />
              <span className="pt-1">{movie.releaseDate.slice(0, 4)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe2 className="h-7 w-7" />
              <span className="pt-1">English</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-7 w-7" />
              <span className="pt-1">{movie.voteAverage.toFixed(1)}</span>
            </div>
          </div>
          <p className="w-full text-justify text-xl text-zinc-500 lg:pr-0 lg:leading-9">
            {movie.overview}
          </p>

          <div
            className="mt-6 w-56 rounded-lg border border-teal-300 bg-grayBtn text-lg text-teal-300 hover:border-teal-400 hover:text-teal-400
        "
          >
            <a
              className="flex w-full px-4 py-2"
              href={`https://www.youtube.com/results?search_query=${movie.title} trailer`}
              target="blank"
            >
              <div className="flex w-full items-center justify-center gap-2">
                <Film className="h-6 w-6" />
                <span>Trailer</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
