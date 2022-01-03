import React, { useEffect, useState } from 'react'
import { Hero, isArcanumHero, isBgHero } from '../../types/types'
import { ArcanumCard } from '../../features/arcanum/ArcanumCard'
import { BGCard } from '../../features/bg/BGCard'
import styles from './HeroesList.module.css'

export interface HeroesListProps {
    heroes: Hero[]
}

export function HeroesList({ heroes }: HeroesListProps) {
    
    return <ul className={styles.container}>
        {heroes?.map(item => <li key={item.id} className={styles.card}>
            { isBgHero(item) && <BGCard hero={item} /> }
            { isArcanumHero(item) && item.game === 'Arcanum' && <ArcanumCard hero={item} /> }
        </li>)}
    </ul>
}

export default HeroesList
