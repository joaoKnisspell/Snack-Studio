import Image from 'next/image'

export function Avatar() {
  return (
    <a
      href="https://portfolio-five-steel-38.vercel.app/"
      target="blank"
      className="flex w-full items-center gap-3 border-t-2 border-teal-400 pt-6 dark:border-zinc-600"
    >
      <Image
        width={40}
        height={40}
        className="rounded-full"
        src="https://github.com/joaoKnisspell.png"
        alt="homem de camiseta laranja"
      />
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-zinc-50">
          Developed by João Knisspell
        </span>
        <span className="text-sm text-zinc-400 ">joaokz@outlook.com</span>
      </div>
    </a>
  )
}
