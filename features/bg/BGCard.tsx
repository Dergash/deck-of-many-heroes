import React from 'react'
import { Bg2Hero, Bg1Hero } from '../../types/types'
import styles from './BGCard.module.css'

export interface BGCardProps {
    hero: Bg1Hero | Bg2Hero
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
            <div className={styles.proficiencies}>
                Proficiencies:
                <ul className={styles.proficienciesList}>
                    {Object.entries(hero.proficiencies).map(([proficiency, points]) => {
                        return <li key={proficiency}>
                            {proficiency}: {new Array(points).fill('○').join(' ')}
                        </li>
                    })}
                </ul>
            </div>
        </div>
    </div>
}
