import Image from 'next/image'

function Avatar() {
  return (
    <div className="grid h-10 w-10 place-content-center gap-2 rounded-full border border-solid border-[#95AAC94D] p-[3px]">
      <Image
        src="/assets/img/bernardo-aria.png"
        alt="User Avatar"
        width={36}
        height={36}
        className="rounded-full"
      />
    </div>
  )
}

export { Avatar }
