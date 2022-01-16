import React, { useContext } from 'react'
import { ArcanumHero, ArcanumSpell, MagicCollege, levelProgression,
    ArcanumSkillGroupSet, ArcanumSkillSet,
    ArcanumCombatSkills, ArcanumSocialSkills, ArcanumTechnologicalSkills, ArcanumThievingSkills
} from './ruleset'
import { DetailsCard } from '../ui/DetailsCard'
import styles from './ArcanumDetails.module.css'
import { observer } from 'mobx-react-lite'
import { StoreContext } from '../store/store'
import { applyLevelingScheme } from './utils'
export interface ArcanumDetailsProps {
    hero: ArcanumHero
}

export function ArcanumDetails({ hero }: ArcanumDetailsProps) {
    const store = useContext(StoreContext)
    const dynamicXp = store.dynamicXp[hero.id]
    const startingXp = levelProgression[hero.startingLevel]
    const level = dynamicXp
        ? getLevelFromXp(dynamicXp)
        : hero.startingLevel
    const selectedLevelHero = applyLevelingScheme(hero, level - hero.startingLevel)
    const spells = groupSpellsByCollege(selectedLevelHero.spells)
    const skills = groupSkills(selectedLevelHero.skills)

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
                            <h4 className={styles.college}>{college}</h4>
                            {spells.map(spell => {
                                return <li key={spell.name}>
                                    {spell.name}
                                </li>
                            })}
                        </ul>
                    })}
                </div> 
            }
            { skills && Object.keys(skills).length > 0 &&
                <div>
                    <h3>Skills</h3>
                    {Object.entries(skills).map(([group, set]) => {
                        return <ul key={group}>
                            <h4 className={styles.college}>{group}</h4>
                            {Object.entries(set).map(([skill, rank]) => {
                                return <li key={skill}>
                                    {skill}: {rank}
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
    return Number.parseInt(Object.entries(levelProgression)
        .find(([key]) => levelProgression[Number.parseInt(key, 10)] === xp)
        ?.[0]!, 10)
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

function groupSkills(skills: ArcanumSkillSet) {
    const result: ArcanumSkillGroupSet = {}
    Object.entries(skills).forEach(([skill, rank]) => {
        if (ArcanumCombatSkills.includes(skill as typeof ArcanumCombatSkills[number])) {
            result.Combat = {
                ...result.Combat,
                [skill]: rank
            }
        }
        if (ArcanumSocialSkills.includes(skill as typeof ArcanumSocialSkills[number])) {
            result.Social = {
                ...result.Social,
                [skill]: rank
            }
        }
        if (ArcanumThievingSkills.includes(skill as typeof ArcanumThievingSkills[number])) {
            result.Thieving = {
                ...result.Thieving,
                [skill]: rank
            }
        }
        if (ArcanumTechnologicalSkills.includes(skill as typeof ArcanumTechnologicalSkills[number])) {
            result.Technological = {
                ...result.Technological,
                [skill]: rank
            }
        }
    })
    return result
}

export default observer(ArcanumDetails)
