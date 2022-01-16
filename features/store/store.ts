import { createContext } from 'react'
import { observable } from 'mobx'

type CardId = string

export type Store = {
    selectedCard?: string
    /**
     * Arcanum and SoU/HotU addons for Neverwinter Nights handle followers progression
     * with leveling scheme instead of pre-generated cards;
     * 
     * This dictionary contains XP set for those cards
     */
    dynamicXp: Record<CardId, number>
}

export const store = observable<Store>({
    selectedCard: undefined,
    dynamicXp: {}
})

export const StoreContext = createContext(store)
export const { Provider } = StoreContext
