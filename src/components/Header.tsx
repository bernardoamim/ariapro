import { Avatar } from './Avatar'
import { Notifications } from './Notifications'
import { SearchInput } from './SearchInput'

function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-solid border-[#95AAC94D] bg-white px-8">
      <SearchInput />
      <aside className="flex items-center gap-2">
        <Notifications />
        <Avatar />
      </aside>
    </header>
  )
}

export { Header }
