import { ComponentProps, ReactElement } from 'react'
import Link, { LinkProps } from 'next/link'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'w-full rounded py-2 text-white group bg-grayBtn ',

  variants: {
    variant: {
      primary: 'hover:bg-teal-900',
      side: 'hover:bg-red-900',
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

type ButtonRootProps = LinkProps &
  VariantProps<typeof button> & {
    children: ReactElement
  }

export function ButtonRoot({ variant, ...props }: ButtonRootProps) {
  return <Link className={button({ variant })} {...props}></Link>
}

type ButtonTriggerProps = ComponentProps<'div'>

export function ButtonTrigger(props: ButtonTriggerProps) {
  return (
    <div
      className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded px-4"
      {...props}
    ></div>
  )
}

type ButtonPrefixProps = ComponentProps<'div'>

export function ButtonPrefix(props: ButtonPrefixProps) {
  return (
    <div
      className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-950"
      {...props}
    ></div>
  )
}
