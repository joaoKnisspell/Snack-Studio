import Image from 'next/image'
import Link from 'next/link'

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-1 text-2xl font-semibold text-zinc-50"
    >
      <Image
        width={40}
        height={40}
        src="/logo.png"
        alt="desenho de uma xíxara de café saindo fumaça"
      />
      <span>Snack Studio</span>
    </Link>
  )
}
