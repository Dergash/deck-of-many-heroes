import React from 'react'
import { BgHero } from '../../types/types'
import styles from './BGCard.module.css'

export interface BGCardProps {
    hero: BgHero
}

export function BGCard({ hero }: BGCardProps) {
    return <div className={styles.container}>
        <aside className={styles.sider}>
            <img src={`/${hero.portrait}`} width="110px" height="170px" />
            <h2 className={styles.name}>
                {hero.name}
            </h2>
        </aside>
        <div className={styles.info}>
            <span className={styles.game}>
                {hero.game}
            </span>
            <hr />
            <span>
                Race: {hero.race}
            </span>
            <span>
                Starting XP: {hero.startingXp}
            </span>
        </div>
    </div>
}
