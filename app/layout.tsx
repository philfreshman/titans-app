import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from "./components/navigation";
import store from "@/app/store/store"
import {Provider} from "react-redux"
import Roles from "@/app/roles/page"
import Providers from "@/app/store/provider"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Titans-App',
  description: 'Generated by create next app',
}

export default function RootLayout({
   children,
 }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body suppressHydrationWarning={true}>
    <Navigation />
    <Providers>
      {children}
    </Providers>
    </body>
    </html>
  )
}

