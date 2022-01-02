import React, { useEffect, useState } from 'react'
import { Hero } from '../../types/types'
import styles from './HeroesList.module.css'

export interface HeroesListProps {
    heroes: Hero[]
}

export function HeroesList({ heroes }: HeroesListProps) {
    
    return <ul className={styles.container}>
        {heroes?.map(item => <li key={item.name}>
            {item.name}
        </li>)}
    </ul>
}

export default HeroesList
