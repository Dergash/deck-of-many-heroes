import React, { useState, FormEvent } from 'react'
import cn from '../../styles/cn'
import styles from './NeverwinterCard.module.css'
import { NwnHero } from './ruleset'

export interface NeverwinterCardProps {
    hero: NwnHero[]
    onClick?: (id: string) => void
}

export function NeverwinterCard({ hero, onClick }: NeverwinterCardProps) {
    const [cardIndex, setCardIndex] = useState(0)
    const card = hero[cardIndex]

    const handleCardChange = (e: FormEvent<HTMLInputElement>) => {
        const newIndex = Number.parseInt(e.currentTarget.value, 10)
        setCardIndex(newIndex)
        onClick?.(hero[newIndex].id)
    }

    const handleCardClick = () => {
        onClick?.(card.id)
    }

    return <div
        className={cn(styles.container, { [styles.clickable]: Boolean(onClick) }) }
        onClick={handleCardClick}
    >
        <aside className={styles.sider}>
            <img src={`/${hero[cardIndex].portrait}`} width="128px" height="200px" />
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
                Class: {getDisplayedClass(card.startingLevel)}
            </span>
            <span>
                Base HP: {card.baseHp}
            </span>
            <span>
                Abilities: STR {card.strength} DEX {card.dexterity} CON {card.constitution} INT {card.intelligence} WIS {card.wisdom} CHA {card.charisma}
            </span>
            <span>
                Saving Throws: {getDisplayedSaves(card.saves)}
            </span>
            <span>
                Skills: {getDisplayedSkills(card.skills)}
            </span>
        </div>
    </div>
}

function getDisplayedClass(characterClasses: Record<string, number>) {
    let label = ''
    Object.entries(characterClasses).forEach(([name, level], index) => {
        label += `${index > 0 ? ' / ' : ''}${name} ${level}`
    })
    return label
}

function getDisplayedSaves(saves: Record<string, number>) {
    return Object.entries(saves).map(([save, value]) => `${save} ${value}`).join(', ')
}

function getDisplayedSkills(skills: Record<string, number>) {
    return Object.entries(skills).map(([save, value]) => `${save} ${value}`).join(', ')
}
