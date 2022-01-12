import React from 'react'
import { ArcanumHero } from '.'
import { DetailsCard } from '../ui/DetailsCard'
import styles from './ArcanumDetails.module.css'

export interface ArcanumDetailsProps {
    hero: ArcanumHero
}

export function ArcanumDetails({ hero }: ArcanumDetailsProps) {
    return <DetailsCard name={hero.name}>
        <img src={hero.portrait} className={styles.portrait} />
    </DetailsCard>
}
