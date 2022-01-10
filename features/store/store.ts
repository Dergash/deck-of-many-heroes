import { createContext } from 'react'
import { observable } from 'mobx'

export type Store = {
    selectedCard?: string
}

export const store = observable<Store>({
    selectedCard: undefined
})

export const StoreContext = createContext(store)
export const { Provider } = StoreContext
