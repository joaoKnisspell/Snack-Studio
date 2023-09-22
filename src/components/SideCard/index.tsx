import { Heart, Trash } from 'lucide-react'
import Link from 'next/link'
import { ButtonPrefix, ButtonRoot, ButtonTrigger } from '../Button'

export function SideCard() {
  return (
    <div className="h-[100px] w-[250px] rounded-lg border border-borderColor bg-bgColor p-2">
      <div className="flex h-full items-start gap-2">
        <img
          src="https://lumiere-a.akamaihd.net/v1/images/au_marvel_theavengers_infinitywar_movie_poster_0bf1f0d0.jpeg?region=1,169,539,609"
          className="h-full"
        />
        <div className="flex h-full w-full flex-col justify-between">
          <div className="flex items-start justify-between">
            <div className="flex flex-col">
              <span className="text-sm">WandaVision</span>
              <span className="text-xs font-normal text-zinc-500">
                Horror, Fantasy
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ButtonRoot href="#" variant="side">
              <ButtonTrigger>
                <span className="text-sm font-medium">Remove</span>
                <Trash className="h-4 w-4 text-red-400 group-hover:text-red-600" />
              </ButtonTrigger>
            </ButtonRoot>
          </div>
        </div>
      </div>
    </div>
  )
}
