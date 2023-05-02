import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { type ReactNode } from 'react'
import Head from 'next/head'

interface AppLayoutProps {
  children: ReactNode
  className?: string
}

export default function AppLayout({ children, className }: AppLayoutProps) {
  return (
    <div className={className}>
      <Head>
        <title>MVP Aria Pro</title>
        <meta name="description" content="Aria Pro's" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-auto min-h-screen bg-slate-100">
        <Sidebar />
        <div className="flex h-screen w-screen flex-col">
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </div>
  )
}
