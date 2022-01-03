import React, {useState, FormEvent} from 'react'
import { ArcanumHero, Hero } from '../../types/types'
import { levelProgression } from './ruleset'
import styles from './ArcanumCard.module.css'

export interface ArcanumCardProps {
    hero: ArcanumHero
} 

export function ArcanumCard({ hero }: ArcanumCardProps) {
    const startingXp = levelProgression[hero.startingLevel]
    const [xp, setXp] = useState(startingXp)
    const level = Object.entries(levelProgression).find(([key]) => levelProgression[Number.parseInt(key, 10)] === xp)?.[0]

    const handleLevelChange = (e: FormEvent<HTMLInputElement>) => {
        const newLevel = Number.parseInt(e.currentTarget.value, 10)
        const newXp = levelProgression[newLevel]
        setXp(newXp)
    }

    return <div className={styles.container}>
        <header className={styles.header}>
            <img src={`/${hero.portrait}`} width="64px" height="64px" />
            <h2 className={styles.name}>
                {hero.name}
            </h2>
        </header>
        <div className={styles.info}>
            <span className={styles.game}>
                {hero.game}
            </span>
            <hr />
            <span>
                Race: {hero.race}
            </span>
            <span>
                Starting XP: {startingXp}
            </span>
            <span>
                Starting Level: {hero.startingLevel}
            </span>
            <span>
                XP: {xp}
            </span>
            <span>
                Level: {level}
            </span>
            <div className={styles.levelRange}>
                <span>
                    Adjust level:
                </span>
                <input type="range" min="1" max="50" value={level} onChange={handleLevelChange} />
            </div>
        </div>
    </div>
}
