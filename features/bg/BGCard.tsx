import React, { useState, FormEvent } from 'react'
import { Bg2Hero, Bg1Hero } from '../../types/types'
import styles from './BGCard.module.css'

export interface BGCardProps {
    hero: Bg1Hero[] | Bg2Hero[]
}

export function BGCard({ hero }: BGCardProps) {
    const [cardIndex, setCardIndex] = useState(0)
    
    const handleCardChange = (e: FormEvent<HTMLInputElement>) => {
        setCardIndex(Number.parseInt(e.currentTarget.value, 10))
    }

    const card = hero[cardIndex]

    return <div className={styles.container}>
        <aside className={styles.sider}>
            <img src={`/${hero[cardIndex].portrait}`} width="110px" height="170px" />
            <h2 className={styles.name}>
                {card.name}
            </h2>
        </aside>
        <div className={styles.info}>
            <span className={styles.game}>
                {card.game}
            </span>
            <div className={styles.levelRange}>
                <span>
                    Adjust level:
                </span>
                <input type="range" min="0" max={hero.length - 1} value={cardIndex} onChange={handleCardChange} />
            </div>
            <hr />
            <span>
                Race: {card.race}
            </span>
            <span>
                Starting XP: {card.startingXp}
            </span>
            <div className={styles.proficiencies}>
                Proficiencies:
                <ul className={styles.proficienciesList}>
                    {Object.entries(card.proficiencies).map(([proficiency, points]) => {
                        return <li key={proficiency}>
                            {proficiency}: {new Array(points).fill('○').join(' ')}
                        </li>
                    })}
                </ul>
            </div>
        </div>
    </div>
}