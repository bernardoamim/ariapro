import Image from 'next/image'

function SearchInput() {
  return (
    <div className="flex h-12 w-96 items-center gap-2 rounded-full border border-solid border-[#95AAC94D] px-3">
      <Image
        src="/assets/icons/search-icon.svg"
        alt="Fuzzy Search"
        width={24}
        height={24}
      />
      <input
        type="text"
        placeholder="Buscar"
        className="h-full w-full bg-transparent outline-none"
      />
    </div>
  )
}

export { SearchInput }
