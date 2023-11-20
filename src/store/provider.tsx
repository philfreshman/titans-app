"use client";

import { PropsWithChildren } from "react"
import ReduxProvider from "@/src/store/reduxProvider"

export default function Providers({ children }: PropsWithChildren<any>) {
  return (
    <ReduxProvider>
      {children}
    </ReduxProvider>
  )
}
