import { ArcanumHero, ArcanumSkillCodes, ArcanumSpell, LevelingScheme } from '.'
import { LevelingSchemeItem, ArcanumSkillName, ArcanumSkillNames, MagicCollegeCodes } from './ruleset'

/**
 *
 * @param scheme 
 */
export function parseLevelingScheme(scheme: string) {
    const headerOffset = scheme.lastIndexOf('{') + 1
    return scheme.substring(headerOffset).split(', ').map(parseLevelingItem)
}

/**
 * 
 * @param item 
 * @returns 
 */
export function parseLevelingItem(item: string): LevelingSchemeItem {
    const [parameter, rawRank] = item.split(' ')
    const rank = Number.parseInt(rawRank, 10)
    const skillCode = parameter.trim().toLowerCase()
    if (MagicCollegeCodes[parameter]) {
        return {
            type: 'spell',
            spell: MagicCollegeCodes[parameter][rank - 1]
        }
    } else if (ArcanumSkillCodes[skillCode as keyof typeof ArcanumSkillCodes]) {
        return {
            type: 'skill',
            skill: ArcanumSkillCodes[skillCode as keyof typeof ArcanumSkillCodes] as ArcanumSkillName,
            rank
        }
    }
    // todo
    return {
        type: 'stat',
        stat: 'Perception',
        rank: 20
    }
}

/**
 * 
 * @param hero 
 * @param scheme 
 */
export function applyLevelingScheme(hero: ArcanumHero, levels: number) {
    const result = { ...hero }
    const scheme = parseLevelingScheme(hero.levelingScheme)
    scheme.forEach((item, index) => {
        if (index >= levels) {
            return
        }
        if (item.type === 'skill') {
            result.skills[item.skill] = item.rank
        }
        if (item.type === 'spell' && !result.spells?.find(spell => spell.name === item.spell.name)) {
            result.spells = [
                ...(result.spells ?? []),
                item.spell
            ]
        }
    })
    return result
    // todo
}


/**
 * Applies spell from leveling scheme if requirments are met
 *
 * If not, applies primary stat leveling
 *
 * @param hero 
 * @param spell 
 */
export function applySpellLeveling(hero: ArcanumHero, spell: ArcanumSpell): LevelingSchemeItem {
    if (spell.willpower > hero.willpower) {
        return {
            type: 'stat',
            stat: 'Willpower',
            rank: hero.willpower + 1
        }
    }
    return {
        type: 'spell',
        spell
    }
}
