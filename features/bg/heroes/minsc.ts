import { Bg1Hero } from '../ruleset'

export const minsc: Bg1Hero = {
    id: 'MINSC.CRE',
    name: 'Minsc',
    race: 'Human',
    game: 'BG1',
    portrait: 'bg1-minsc.png',
    startingXp: 258,
    proficiencies: {
      'Large Sword': 2,
      'Spiked Weapons': 1,
      'Axe': 1
    },
    hp: 10,
    lore: 1,
    skills: { Stealth: 15 }
}

export const minsc2: Bg1Hero = {
    ...minsc,
    id: 'MINSC2.CRE',
    startingXp: 2276,
    hp: 17,
    lore: 2,
    skills: { Stealth: 20 }
}

export const minsc4: Bg1Hero = {
    ...minsc2,
    id: 'MINSC4.CRE',
    startingXp: 9142,
    hp: 29,
    lore: 4,
    skills: { Stealth: 33 },
    proficiencies: {
        'Large Sword': 2,
        'Small Sword': 1,
        'Bow': 2
    },
}

export const minsc6: Bg1Hero = {
    ...minsc4,
    id: 'MINSC6.CRE',
    startingXp: 32293,
    hp: 46,
    lore: 6,
    skills: { Stealth: 47 },
    proficiencies: {
        'Large Sword': 2,
        'Small Sword': 2,
        'Bow': 2
    },
}