import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { type ReactNode } from 'react'

interface AppLayoutProps {
  children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex h-auto min-h-screen bg-slate-100">
      <Sidebar />
      <div className="flex h-screen w-screen flex-col">
        <Header />
        <main className="">{children}</main>
      </div>
    </div>
  )
}
