import type { Metadata } from 'next'
import './globals.css'
import Providers from "@/src/store/provider"
import Navbar from "@/src/components/navbar"
import Snow from "@/src/components/snow"

export const metadata: Metadata = {
  title: 'Titans-App',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
    <body suppressHydrationWarning={true}>
    <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
    <Navbar />
    <Providers>
      <Snow/>
      {children}
    </Providers>
    </body>
    </html>
  )
}
