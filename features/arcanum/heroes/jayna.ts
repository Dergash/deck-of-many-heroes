import { ArcanumHero } from '../ruleset'

const levelingScheme = `{95}Jayna			{Melee 4, Anatomical 1, Dodge 4, Therapeutics 1, Heal 4, MaxHPS 38, Anatomical 2, Dodge 8, Therapeutics 2, Heal 8, BE 9, MaxHPS 54, Melee 8, Anatomical 3, Dodge 12, Therapeutics 3, MaxHPS 70, Anatomical 4, Dodge 16, Therapeutics 4, Heal 12, BE 10, MaxHPS 86, Melee 12, Dodge 20, Heal 16, MaxHPS 98, PE 19, Heal 20, BE 11, MaxHPS 110, PE 20, Melee 16, MaxHPS 120, Gambling 16, MaxHPS 128, Melee 20, DX 19, MaxHPS 138, DX 20, MaxHPS 400}`

export const jayna: ArcanumHero = {
    id: '9',
    name: 'Jayna Stiles',
    race: 'Half-elf',
    game: 'Arcanum',
    portrait: 'NPCJay.bmp',
    startingLevel: 5,
    strength: 8,
    constitution: 8,
    dexterity: 9,
    beauty: 9,
    intelligence: 9,
    willpower: 8,
    perception: 8,
    charisma: 8,
    skills: {},
    levelingScheme
}
