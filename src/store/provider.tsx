"use client";

import { PropsWithChildren } from "react"
import { Provider } from 'react-redux'
import {store, persist} from "@/src/store/store"
import {PersistGate} from "redux-persist/integration/react"

export default function Providers({ children }: PropsWithChildren<any>) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persist}>
        {children}
      </PersistGate>
    </Provider>
  )
}

