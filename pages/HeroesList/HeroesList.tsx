import React, { useContext, useMemo } from 'react'
import { Hero } from '../../types/baseTypes'
import { BgHero, isBgHero, BGCard } from '../../features/bg'
import { isArcanumHero, ArcanumCard } from '../../features/arcanum'
import { isNwnHero, NwnHero, NeverwinterCard } from '../../features/nwn'
import styles from './HeroesList.module.css'
import { StoreContext } from '../../features/store/store'
import { action } from 'mobx'

export interface HeroesListProps {
    heroes: Hero[]
}

export function HeroesList({ heroes }: HeroesListProps) {
    const groupedHeroes = useMemo(() => getHeroesDeck(heroes), [heroes])
    const store = useContext(StoreContext)

    const handleClick = action((id: string) => {
        store.selectedCard = id
    })
    
    return <ul className={styles.container}>
        {Object.entries(groupedHeroes)?.map(([name, deck]) => {
            const arcanumCard = isArcanumHero(deck[0]) && deck[0]
            const bgDeck = isBgHero(deck[0]) && deck as BgHero[]
            const nwnDeck =isNwnHero(deck[0]) && deck as NwnHero[]
            return <li key={name} className={styles.card}>
                { bgDeck && <BGCard
                    hero={bgDeck}
                    disabled={bgDeck[0].disabled}
                    onClick={handleClick}
                /> }
                { arcanumCard && <ArcanumCard
                    hero={arcanumCard}
                    onClick={handleClick}
                /> }
                { nwnDeck && <NeverwinterCard
                    hero={nwnDeck}
                    onClick={handleClick}
                />}
            </li>
        })}
    </ul>
}


/**
 * Group heroes by their names, putting different cards of the same hero in one deck.
 * 
 * @param heroes Heroes of different games
 * @returns Dictionary of heroes decks grouped by their names 
 */
function getHeroesDeck(heroes: Hero[]) {
    const decks: Record<string, Hero[]> = {}
    heroes?.forEach(hero => {
        const deck = decks[hero.name]
        if (deck) {
            decks[hero.name].push(hero)
        } else {
            decks[hero.name] = [hero]
        }
    })
    return decks
}

export default HeroesList
