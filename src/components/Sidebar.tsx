import { Logo } from './Logo'

function Sidebar() {
  return (
    <aside className="flex min-h-screen w-56 flex-col border border-solid border-slate-300 bg-white py-5">
      <Logo />
      Sidebar
    </aside>
  )
}

export { Sidebar }
