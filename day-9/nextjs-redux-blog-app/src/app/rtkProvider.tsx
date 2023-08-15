"use client"
import { Provider } from "react-redux";
import { store } from '@/store'

export default function RTKProvider({ children }: { children: any }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}