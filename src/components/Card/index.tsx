import { Plus, Star } from 'lucide-react'
import { ButtonPrefix, ButtonRoot, ButtonTrigger } from '../Button'
import Image from 'next/image'

export interface ApiMovieProps {
  id: number
  title: string
  poster_path: string
  vote_average: number
}
interface MovieProps {
  id: number
  title: string
  posterPath: string
  voteAverage: number
}

export function Card({ id, title, posterPath, voteAverage }: MovieProps) {
  return (
    <div className="flex w-[192px] flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="truncate text-xl font-semibold text-white">
          {title}
        </span>
        <div className="flex items-center gap-1 text-base font-semibold text-star">
          <Star className="mb-0.5 h-4 w-4" fill="yellow" />
          <span>{voteAverage}</span>
        </div>
      </div>
      <div className="w-full">
        <Image
          width={192}
          height={282}
          className="rounded-lg"
          src={`https://image.tmdb.org/t/p/original${posterPath}`}
          alt=""
        />
      </div>
      <div className="flex h-full items-center">
        <ButtonRoot href={`/movies/${id}`} variant="primary">
          <ButtonTrigger>
            <ButtonPrefix>
              <Plus className="h-4 w-4 text-teal-400" fill="rgba(45 212 191)" />
            </ButtonPrefix>
            <span className="font-sans">View More</span>
          </ButtonTrigger>
        </ButtonRoot>
      </div>
    </div>
  )
}
