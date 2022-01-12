
import { Bg1Hero, Bg2Hero } from '../ruleset'

export const imoen1: Bg1Hero = {
    id: 'IMOEN1.CRE',
    startingXp: 9,
    name: 'Imoen',
    race: 'Human',
    game: 'BG1',
    hp: 6,
    portrait: 'bg1-imoen.png',
    proficiencies: {
      Bow: 1,
      'Small Sword': 1
    },
    lore: 3,
    skills: {
      Stealth: 10,
      'Find Traps': 20
    }
  }

export const imoen2: Bg1Hero = {
    ...imoen1,
    id: 'IMOEN2.CRE',
    startingXp: 1304,
    hp: 10,
    lore: 6,
    skills: {
      Stealth: 20,
      'Find Traps': 30
    }
}

export const imoen4: Bg1Hero = {
    ...imoen2,
    id: 'IMOEN4.CRE',
    startingXp: 5124,
    hp: 21,
    lore: 12,
    skills: {
      Stealth: 40,
      'Find Traps': 50
    }
}

export const imoen6: Bg1Hero = {
    ...imoen4,
    id: 'IMOEN6.CRE',
    startingXp: 20636,
    hp: 31,
    proficiencies: {
      Bow: 1,
      'Small Sword': 1,
      "Blunt Weapons": 1
    },
    lore: 18,
    skills: {
      'Stealth': 60,
      'Find Traps': 70
    }
}

export const imoenBg2_400: Bg2Hero = {
    id: '6',
    name: 'Imoen',
    race: 'Human',
    game: 'BG2: SoA',
    startingXp: 400000,
    portrait: 'bg2-imoen.jpg',
    proficiencies: {},
    hp: 57,
    lore: 31
}

export const imoenBg2_1200: Bg2Hero = {
    ...imoenBg2_400,
    id: '7',
    startingXp: 1200000,
    hp: 69,
    lore: 46
}
