import React from 'react'
import { BgHero } from './ruleset'
import styles from './BGDetails.module.css'
import { getSkills } from '.'
import DetailsCard from '../ui/DetailsCard'

export interface BGDetailsProps {
    hero: BgHero
}

export function BGDetails({ hero }: BGDetailsProps) {
    
    const skills = getSkills(hero)

    return <DetailsCard name={hero.name}>
        <img src={hero.portrait} className={styles.portrait} />
        <div className={styles.info}>
            <span>Race: {hero.race}</span>
            <span>Starting XP: {hero.startingXp}</span>
            <span>HP: {hero.hp}</span>
            <span>Lore: {hero.lore}</span>
        </div>
        { hero.proficiencies &&
            <div>
                <h3>Proficiencies</h3>
                <ul className={styles.proficienciesList}>
                    {Object.entries(hero.proficiencies).map(([proficiency, points]) => {
                        return <li key={proficiency}>
                            {proficiency}: {new Array(points).fill('○').join(' ')}
                        </li>
                    })}
                </ul>
            </div>
        }
        { skills &&
            <div>
                <h3>Skills</h3>
                <ul className={styles.skills}>
                    {Object.entries(skills).map(([skill, value]) => {
                        return <li key={skill}>
                            {skill}: {value}%
                        </li>
                    })}
                </ul>
            </div>
        }
    </DetailsCard>
}
