import React, { useMemo } from 'react'
import { BgHero, Hero, isArcanumHero, isBgHero } from '../../types/types'
import { ArcanumCard } from '../../features/arcanum/ArcanumCard'
import { BGCard } from '../../features/bg/BGCard'
import styles from './HeroesList.module.css'

export interface HeroesListProps {
    heroes: Hero[]
}

export function HeroesList({ heroes }: HeroesListProps) {
    const groupedHeroes = useMemo(() => getHeroesDeck(heroes), [heroes])
    
    return <ul className={styles.container}>
        {Object.entries(groupedHeroes)?.map(([name, deck]) => {
            const arcanumCard = !Array.isArray(deck) && isArcanumHero(deck) && deck
            const bgDeck = Array.isArray(deck) && isBgHero(deck[0]) && deck as BgHero[]
            return <li key={name} className={styles.card}>
                { bgDeck && <BGCard hero={bgDeck} /> }
                { arcanumCard && <ArcanumCard hero={arcanumCard} /> }
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
    const decks: Record<string, Hero | Hero[]> = {}
    heroes?.forEach(hero => {
        if (!isBgHero(hero)) {
            decks[hero.name] = hero
            return
        }
        const deck = decks[hero.name]
        if (Array.isArray(deck)) {
            deck.push(hero)
        } else {
            decks[hero.name] = [hero]
        }
    })
    return decks
}

export default HeroesList
