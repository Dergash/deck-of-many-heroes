import React, { useState, FormEvent } from 'react'
import { Bg2Hero, Bg1Hero } from '../../types/types'
import cn from '../../styles/cn'
import styles from './BGCard.module.css'

export interface BGCardProps {
    hero: Bg1Hero[] | Bg2Hero[]
    disabled?: boolean
}

export function BGCard({ hero, disabled }: BGCardProps) {
    const [cardIndex, setCardIndex] = useState(0)
    
    const handleCardChange = (e: FormEvent<HTMLInputElement>) => {
        setCardIndex(Number.parseInt(e.currentTarget.value, 10))
    }

    const card = hero[cardIndex]

    return <div className={cn(styles.container, { [ styles.disabled]: disabled!! })} >
        <aside className={styles.sider}>
            <img src={`/${hero[cardIndex].portrait}`} width="110px" height="170px" className={disabled ? styles.disabledImg : undefined} />
            <h2 className={styles.name}>
                {card.name}
            </h2>
        </aside>
        <aside className={styles.mock} />
            <span className={styles.game}>
                {card.game}
            </span>
            <div className={styles.levelRange}>
                <span>
                    Adjust level:
                </span>
                <input
                    type="range"
                    min="0"
                    max={hero.length - 1}
                    value={cardIndex}
                    disabled={disabled}
                    onChange={handleCardChange}
                />
            </div>
            <hr />
            <div className={styles.info}>
                <div>
                    Race: {card.race}
                </div>
                <div>
                    Starting XP: {card.startingXp}
                </div>
            </div>
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
            <hr style={{ clear: 'both', marginTop: '16px' }} />
    </div>
}
