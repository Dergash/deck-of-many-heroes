import React from 'react'
import { ArcanumHero } from '.'
import { DetailsCard } from '../ui/DetailsCard'
import styles from './ArcanumDetails.module.css'

export interface ArcanumDetailsProps {
    hero: ArcanumHero
}

export function ArcanumDetails({ hero }: ArcanumDetailsProps) {
    return <DetailsCard>
        <img src={hero.portrait} className={styles.portrait} />
        <h2 className={styles.name}>{hero.name}</h2>
    </DetailsCard>
}
