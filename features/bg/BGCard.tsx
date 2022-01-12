import React, { useState, FormEvent } from 'react'
import { Bg2Hero, Bg1Hero } from './ruleset'
import cn from '../../styles/cn'
import styles from './BGCard.module.css'

export interface BGCardProps {
    hero: Bg1Hero[] | Bg2Hero[]
    disabled?: boolean
    onClick?: (id: string) => void
}

export function BGCard({ hero, disabled, onClick }: BGCardProps) {
    const [cardIndex, setCardIndex] = useState(0)
    
    const handleCardChange = (e: FormEvent<HTMLInputElement>) => {
        const newIndex = Number.parseInt(e.currentTarget.value, 10)
        setCardIndex(newIndex)
        onClick?.(hero[newIndex].id)
    }

    const card = hero[cardIndex]

    const handleCardClick = () => {
        onClick?.(card.id)
    }

    return <div
        className={cn(
            styles.container,
            {
                [styles.disabled]: disabled!!,
                [styles.clickable]: Boolean(onClick)
            }
        )}
        onClick={!disabled ? handleCardClick : undefined}
    >
        <aside className={styles.sider}>
            <img src={`/${hero[cardIndex].portrait}`} width="110px" height="170px" className={disabled ? styles.disabledImg : undefined} />
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
            <span>
                Race: {card.race}
            </span>
            <span>
                HP: {card.hp}
            </span>
            <span>
                Starting XP: {card.startingXp}
            </span>
            <span>
                Lore: {card.lore}
            </span>
        </div>
    </div>
}
