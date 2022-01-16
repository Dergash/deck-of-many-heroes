import { ArcanumHero } from '../ruleset'
import { NecromanticWhiteSpells } from '../spells/necromantic-white'

const levelingScheme = `{91}Virgil			{necro_good 1, Heal 4, MaxHPS 36, Dodge 4, Melee 4, Picklock 4, Dodge 4, Melee 8, necro_good 2, Heal 8, Dodge 8, MaxHPS 62, Melee 12, necro_good 3, Heal 12, Picklock 8, Dodge 12, MaxHPS 90, Melee 16, necro_good 4, Heal 16, Dodge 16, MaxHPS 106, Melee 20, Heal 20, Picklock 12, Dodge 20, MaxHPS 200}`

export const virgil: ArcanumHero = {
    id: '5',
    name: 'Virgil',
    race: 'Human',
    game: 'Arcanum',
    startingLevel: 1,
    portrait: 'arcanum-virgil.png',
    strength: 9,
    constitution: 8,
    dexterity: 8,
    beauty: 8,
    intelligence: 7,
    willpower: 8,
    perception: 8,
    charisma: 8,
    spells: [
        NecromanticWhiteSpells[0]
    ],
    skills: {},
    levelingScheme
}
