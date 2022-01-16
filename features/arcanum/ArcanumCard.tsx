import React, {useState, FormEvent, useContext} from 'react'
import { levelProgression, ArcanumHero } from './ruleset'
import styles from './ArcanumCard.module.css'
import cn from '../../styles/cn'
import { runInAction } from 'mobx'
import { StoreContext } from '../store/store'
import { observer } from 'mobx-react-lite'

export interface ArcanumCardProps {
    hero: ArcanumHero
    onClick?: (id: string) => void
} 

export function ArcanumCard({ hero, onClick }: ArcanumCardProps) {
    const store = useContext(StoreContext)
    const startingXp = levelProgression[hero.startingLevel]
    const [xp, setXp] = useState(startingXp)
    const level = Object.entries(levelProgression).find(([key]) => levelProgression[Number.parseInt(key, 10)] === xp)?.[0]

    const handleLevelChange = (e: FormEvent<HTMLInputElement>) => {
        const newLevel = Number.parseInt(e.currentTarget.value, 10)
        const newXp = levelProgression[newLevel]
        setXp(newXp)
        runInAction(() => {
            store.dynamicXp[hero.id] = newXp
            onClick?.(hero.id)
        })
    }

    const handleCardClick = () => {
        onClick?.(hero.id)
    }

    return <div
        className={cn(styles.container, { [styles.clickable]: Boolean(onClick) }) }
        onClick={handleCardClick}
    >
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
            <div className={styles.levelRange}>
                <span>
                    Adjust level:
                </span>
                <input type="range" min={hero.startingLevel} max="50" value={level} onChange={handleLevelChange} />
            </div>
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
        </div>
    </div>
}

export default observer(ArcanumCard)
