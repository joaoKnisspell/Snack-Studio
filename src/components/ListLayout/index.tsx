import { ComponentProps } from 'react'

type ListLayoutProps = ComponentProps<'div'> & {
  headline: string
  subHeadline: string
}

export function ListLayout({
  headline,
  subHeadline,
  ...props
}: ListLayoutProps) {
  return (
    <div className="flex min-h-screen w-full flex-col items-start gap-8 p-8 lg:mx-auto lg:max-w-[1000px]  2xl:max-w-full 2xl:px-20">
      <div className="flex flex-col gap-1">
        <h3 className="pt-20 text-2xl font-semibold text-text lg:pt-0">
          {headline}
        </h3>
        <span className="text-base text-zinc-500">{subHeadline}</span>
      </div>
      <div className="flex w-full flex-wrap justify-center gap-8 lg:justify-start lg:gap-10 2xl:gap-14">
        {props.children}
      </div>
    </div>
  )
}
