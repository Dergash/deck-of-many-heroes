import React from 'react'
import { NwnHero } from './ruleset'
import styles from './NeverwinterDetails.module.css'

export interface NeverwinterDetailsProps {
    hero: NwnHero
}

export function NeverwinterDetails({ hero }: NeverwinterDetailsProps) {
    return <div className={styles.container}>
        <img src={hero.portrait} className={styles.portrait} />
        <h2 className={styles.name}>{hero.name}</h2>
        <div className={styles.info}>
            <span>Race: {hero.race}</span>
            <ul className={styles.list}>
                {Object.entries(hero.startingLevel).map(([ name, level ]) => {
                    return <li key={name}>
                        {name}: {level}
                    </li>
                })}
            </ul>
            <span>HP: {hero.baseHp}</span>
            <div>
                <h3>Saving Throws</h3>
                <ul>
                    <li>
                        Fortitude: {hero.saves.fortitude}
                    </li>
                    <li>
                        Reflex: {hero.saves.reflex}
                    </li>
                    <li>
                        Fortitude: {hero.saves.fortitude}
                    </li>
                </ul>
            </div>
            <div>
                <h3>Abilities</h3>
                <ul>
                    <li>
                        Strength: {hero.strength}
                    </li>
                    <li>
                        Dexterity: {hero.dexterity}
                    </li>
                    <li>
                        Constitution: {hero.constitution}
                    </li>
                    <li>
                        Wisdom: {hero.wisdom}
                    </li>
                    <li>
                        Intelligence: {hero.intelligence}
                    </li>
                    <li>
                        Charisma: {hero.charisma}
                    </li>
                </ul>
            </div>
            <div>
                <h3>Skills</h3>
                <ul>
                    {Object.entries(hero.skills).map(([skill, value]) => {
                        return <li key={skill}>
                            {skill}: {value}
                        </li>
                    })}
                </ul>
            </div>
        </div>
    </div>
}
