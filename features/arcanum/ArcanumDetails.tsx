import React, { useContext } from 'react'
import { ArcanumHero, ArcanumSpell, MagicCollege, levelProgression } from './ruleset'
import { DetailsCard } from '../ui/DetailsCard'
import styles from './ArcanumDetails.module.css'
import { observer } from 'mobx-react-lite'
import { StoreContext } from '../store/store'

export interface ArcanumDetailsProps {
    hero: ArcanumHero
}

export function ArcanumDetails({ hero }: ArcanumDetailsProps) {
    const store = useContext(StoreContext)
    const dynamicXp = store.dynamicXp[hero.id]
    const startingXp = levelProgression[hero.startingLevel]
    const level = dynamicXp
        ? Object.entries(levelProgression).find(([key]) => levelProgression[Number.parseInt(key, 10)] === dynamicXp)?.[0]
        : hero.startingLevel
    const spells = groupSpellsByCollege(hero.spells)

    return <DetailsCard name={hero.name}>
        <img src={hero.portrait} className={styles.portrait} />
        <div className={styles.info}>
            <span>
                Race: {hero.race}
            </span>
            <span>
                Starting Level: {hero.startingLevel}
            </span>
            <span>
                XP: {dynamicXp ?? startingXp}
            </span>
            <span>
                Level: {level}
            </span>
            <span>
                
            </span>
            { spells && Object.keys(spells).length > 0 &&
                <div>
                    <h3>Spells</h3>
                    {Object.entries(spells).map(([college, spells]) => {
                        return <ul key={college}>
                            {spells.map(spell => {
                                return <li key={spell.name}>
                                    {spell.name}
                                </li>
                            })}
                        </ul>
                    })}
                </div> 
            }
        </div>
    </DetailsCard>
}

/**
 * TODO: Move to utils
 */
function getLevelFromXp(xp: number) {
    return Object.entries(levelProgression)
        .find(([key]) => levelProgression[Number.parseInt(key, 10)] === xp)
        ?.[0]
}

function groupSpellsByCollege(spells?: ArcanumSpell[]) {
    if (!spells) {
        return {}
    }
    return spells.reduce<Partial<Record<MagicCollege, ArcanumSpell[]>>>((result, nextSpell) => {
        if (result[nextSpell.college]) {
            result[nextSpell.college]?.push(nextSpell)
        } else {
            result[nextSpell.college] = [nextSpell]
        }
        return result
    }, {})
}

export default observer(ArcanumDetails)
