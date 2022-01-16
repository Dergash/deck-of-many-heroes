import { ArcanumHero } from '../ruleset'
import { NecromanticWhiteSpells } from '../spells/necromantic-white'

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
    ]
}
