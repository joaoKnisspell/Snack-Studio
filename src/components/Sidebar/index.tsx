'use client'

import { Logo } from './Logo'
import { NavItemRoot } from './NavItem'
import { Clock, Flame, Home, Menu, Popcorn, Tv2 } from 'lucide-react'

import * as Collapsible from '@radix-ui/react-collapsible'
import { Avatar } from './Avatar'

export function Sidebar() {
  return (
    <Collapsible.Root className=" fixed left-0 right-0 top-0 z-30 flex flex-col gap-14 border-b-2 border-borderColor bg-sides p-4 data-[state=open]:bottom-0 lg-[state=closed]:bottom-0 lg:mr-auto lg:w-80 lg:border-r-2 lg:p-8">
      <div className="flex w-full justify-between">
        <Logo />
        <Collapsible.Trigger asChild>
          <button className="p-1 hover:bg-zinc-700 lg:hidden">
            <Menu className="h-8 w-8 text-text" />
          </button>
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content
        forceMount
        className="h-full data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <nav className="flex h-full flex-col justify-between">
          <div className="flex flex-col gap-3">
            <NavItemRoot linkPath="/" linkTitle="Home">
              <Home className="h-6 w-6  text-zinc-500 group-hover:text-teal-300" />
            </NavItemRoot>
            <NavItemRoot linkPath="/nowplaying" linkTitle="Now Playing">
              <Tv2 className="h-6 w-6  text-zinc-500 group-hover:text-teal-300" />
            </NavItemRoot>
            <NavItemRoot linkPath="/popular" linkTitle="Popular">
              <Popcorn className="h-6 w-6  text-zinc-500 group-hover:text-teal-300" />
            </NavItemRoot>
            <NavItemRoot linkPath="/toprated" linkTitle="Top Rated">
              <Flame className="h-6 w-6  text-zinc-500 group-hover:text-teal-300" />
            </NavItemRoot>
            <NavItemRoot linkPath="/upcoming" linkTitle="Upcoming">
              <Clock className="h-6 w-6  text-zinc-500 group-hover:text-teal-300" />
            </NavItemRoot>
          </div>
          <Avatar />
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
