import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { type ReactNode } from 'react'
import Head from 'next/head'

interface AppLayoutProps {
  children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Head>
        <title>MVP Aria Pro</title>
        <meta name="description" content="Aria Pro's" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-auto min-h-screen bg-slate-100">
        <Sidebar />
        <div className="flex h-screen w-screen flex-col">
          <Header />
          <main className="">{children}</main>
        </div>
      </div>
    </>
  )
}
