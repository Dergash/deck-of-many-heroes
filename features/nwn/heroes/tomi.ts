import { NwnHero } from '../ruleset'

export const tomi4: NwnHero = {
    id: 'hen_gal_002',
    name: 'Tomi Undergallows',
    race: 'Halfling',
    game: 'NWN',
    startingLevel: {
      Rogue: 4
    },
    strength: 12,
    dexterity: 19,
    constitution: 16,
    intelligence: 12,
    wisdom: 10,
    charisma: 10,
    portrait: 'nwn-tomi.jpg',
    baseHp: 24,
    saves: {
      fortitude: 1,
      reflex: 4,
      will: 1
    },
    skills: {
        'Disable Trap': 7,
        Discipline: 3,
        Hide: 7,
        Listen: 7,
        'Move Silently': 7,
        'Open Lock': 7,
        Parry: 7,
        'Pick Pocket': 2,
        Search: 7,
        Spot: 6
    }
}

export const tomi5: NwnHero = {
    ...tomi4,
    id: 'hen_gal_003',
    startingLevel: {
      Rogue: 5
    },
    baseHp: 30,
    skills: {
        'Disable Trap': 8,
        Discipline: 3,
        Hide: 8,
        Listen: 8,
        'Move Silently': 8,
        'Open Lock': 8,
        Parry: 8,
        'Pick Pocket': 2,
        Search: 8,
        Spot: 8
    }
}

export const tomi6: NwnHero = {
    ...tomi5,
    id: 'hen_gal_004',
    startingLevel: {
      Rogue: 6
    },
    baseHp: 34,
    saves: {
      fortitude: 2,
      reflex: 5,
      will: 2
    },
    skills: {
        'Disable Trap': 9,
        Discipline: 3,
        Hide: 9,
        Listen: 9,
        'Move Silently': 9,
        'Open Lock': 9,
        Parry: 9,
        'Pick Pocket': 3,
        Search: 9,
        Spot: 8
    }
}

export const tomi7: NwnHero = {
    ...tomi6,
    id: 'hen_gal_005',
    startingLevel: {
      Rogue: 7
    },
    baseHp: 38,
    saves: {
      fortitude: 2,
      reflex: 5,
      will: 2
    },
    skills: {
        'Disable Trap': 10,
        Discipline: 3,
        Hide: 10,
        Listen: 10,
        'Move Silently': 10,
        'Open Lock': 10,
        Parry: 10,
        'Pick Pocket': 10,
        Search: 10,
        Spot: 10
    }
}
