import { type AppType } from 'next/app'
import { type Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import localFont from 'next/font/local'

import { api } from '~/utils/api'

import '~/styles/globals.css'
import AppLayout from '~/components/AppLayout'

const sfPro = localFont({
  variable: '--font-sfPro',
  src: [
    {
      path: '../assets/fonts/SF-Pro-Display-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/SF-Pro-Display-Medium.otf',
      weight: '600',
      style: 'normal',
    },
  ],
})

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <AppLayout className={`${sfPro.variable} font-sans`}>
        <Component {...pageProps} />
      </AppLayout>
    </SessionProvider>
  )
}

export default api.withTRPC(MyApp)
