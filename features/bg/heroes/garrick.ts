import { Bg1Hero } from '../ruleset'

export const garrick: Bg1Hero = { 
    id: 'GARRIC.CRE',
    name: 'Garrick',
    race: 'Human',
    game: 'BG1',
    portrait: 'bg1-garrick.png',
    startingXp: 76,
    proficiencies: {
       'Small Sword': 1,
       'Missile Weapons': 1
    },
    hp: 6,
    lore: 10
}

export const garrick2: Bg1Hero = {
    ...garrick,
    id: 'GARRIC2.CRE',
    startingXp: 1270,
    lore: 20,
    hp: 10
}

export const garrick4: Bg1Hero = {
    ...garrick2,
    id: 'GARRIC2.CRE',
    startingXp: 5089,
    lore: 40,
    hp: 15,
    proficiencies: {
        'Small Sword': 1,
        'Missile Weapons': 1,
        Bow: 1
     },
}

export const garrick6: Bg1Hero = {
    ...garrick4,
    id: 'GARRIC2.CRE',
    startingXp: 21121,
    lore: 20,
    hp: 60
}
