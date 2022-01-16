import { ArcanumHero } from '../ruleset'

/**
 * TODO: Check if correct scheme
 */
const levelingScheme = `{68}-Warrior Mage Evil		{Melee 4, necro_evil 2, Dodge 4, force 1, fire 1, st 12, melee 12, dodge 12, necro_evil 4,  melee 16, summoning 2, dodge 16, in 12, fire 3, st 15, melee 20, dodge 20, necro_evil 5, fire 5, in 18, st 20, dx 20}`

export const geoffrey: ArcanumHero = {
    id: '13',
    name: 'Geoffrey Tarellonde-Ashe',
    race: 'Human',
    game: 'Arcanum',
    portrait: 'arcanum-geoffrey.png',
    startingLevel: 12,
    strength: 6,
    constitution: 10,
    dexterity: 8,
    beauty: 8,
    intelligence: 16,
    willpower: 13,
    perception: 8,
    charisma: 8,
    skills: {},
    levelingScheme
}
