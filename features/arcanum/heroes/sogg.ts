import { ArcanumHero } from '../ruleset'

/**
 * TODO: Check if correct
 */
const levelingScheme = `{66}-Warrior			{Melee 4, Dodge 4, St 10, Dx 10, melee 8, dodge 8, st 12, dx 12, wp 10, melee 12, dodge 12, st 15, dx 15, wp 12, melee 16, dodge 16, st 18, dx 18, wp 14, melee 20, dodge 20, st 20, wp 16, dx 20, maxhps 300}`

export const sogg: ArcanumHero = {
    id: '8',
    name: 'Sogg Mead Mug',
    race: 'Half-Ogre',
    game: 'Arcanum',
    startingLevel: 2,
    portrait: 'sogg.png',
    strength: 15,
    constitution: 8,
    dexterity: 10,
    beauty: 7,
    intelligence: 3,
    willpower: 8,
    perception: 8,
    charisma: 8,
    skills: {},
    levelingScheme
}
