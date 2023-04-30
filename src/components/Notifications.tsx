import Image from 'next/image'

function Notifications() {
  return (
    <div className="grid h-10 w-10 place-content-center rounded-full border border-solid border-slate-300">
      <Image src="/bell-icon.svg" alt="Notifications" width={24} height={24} />
    </div>
  )
}

export { Notifications }
