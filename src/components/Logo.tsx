import Image from 'next/image'

function Logo() {
  return (
    <div className="mb-12 h-auto w-full px-4">
      <Image
        src="/logo-aria-2x.png"
        alt="Aria Pro MVP"
        width={84}
        height={32}
      />
    </div>
  )
}

export { Logo }
