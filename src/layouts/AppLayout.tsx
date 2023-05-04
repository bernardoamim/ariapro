import { Sidebar } from '../components/Sidebar'
import { Header } from '../components/Header'
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

      <div className="flex h-auto min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex h-auto min-h-screen w-full flex-col pl-[16.67%] pt-16">
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </div>
  )
}
