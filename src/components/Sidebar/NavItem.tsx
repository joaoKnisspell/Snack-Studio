import Link from 'next/link'
import { ComponentProps, ReactElement } from 'react'

type NavItemNameProps = ComponentProps<'span'> & {
  name: string
}

export function NavItemName({ name, ...props }: NavItemNameProps) {
  return (
    <span
      className="font-medium text-zinc-700 group-hover:font-semibold group-hover:text-teal-700  dark:text-zinc-400 dark:group-hover:text-teal-300"
      {...props}
    >
      {name}
    </span>
  )
}

type NavItemRootProps = ComponentProps<'div'> & {
  linkPath: string
  children: ReactElement
  linkTitle: string
}

export function NavItemRoot({
  linkPath,
  children,
  linkTitle,
  ...props
}: NavItemRootProps) {
  return (
    <div {...props}>
      <Link className="" href={linkPath}>
        <div className="group flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2 dark:hover:bg-transparent">
          {children}
          <span className="text-xl font-normal text-zinc-500 group-hover:text-teal-300 lg:text-lg">
            {linkTitle}
          </span>
        </div>
      </Link>
    </div>
  )
}
