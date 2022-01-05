import React, { useMemo } from 'react'
import { BgHero, Hero, isArcanumHero, isBgHero, isNwnHero } from '../../types/types'
import { ArcanumCard } from '../../features/arcanum/ArcanumCard'
import { BGCard } from '../../features/bg/BGCard'
import styles from './HeroesList.module.css'
import { NwnHero } from '../../features/nwn/ruleset'
import { NeverwinterCard } from '../../features/nwn/NeverwinterCard'

export interface HeroesListProps {
    heroes: Hero[]
}

export function HeroesList({ heroes }: HeroesListProps) {
    const groupedHeroes = useMemo(() => getHeroesDeck(heroes), [heroes])
    
    return <ul className={styles.container}>
        {Object.entries(groupedHeroes)?.map(([name, deck]) => {
            const arcanumCard = isArcanumHero(deck[0]) && deck[0]
            const bgDeck = isBgHero(deck[0]) && deck as BgHero[]
            const nwnDeck =isNwnHero(deck[0]) && deck as NwnHero[]
            return <li key={name} className={styles.card}>
                { bgDeck && <BGCard hero={bgDeck} /> }
                { arcanumCard && <ArcanumCard hero={arcanumCard} /> }
                { nwnDeck && <NeverwinterCard hero={nwnDeck} />}
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
