import { NwnHero } from '../ruleset'

export const linu4: NwnHero = {
    id: '14',
    name: 'Linu La\'neral',
    race: 'Elf',
    game: 'NWN',
    startingLevel: {
      Cleric: 4
    },
    strength: 16,
    dexterity: 10,
    constitution: 14,
    intelligence: 10,
    wisdom: 16,
    charisma: 12,
    portrait: 'nwn-linu.png',
    baseHp: 32,
    saves: {
      fortitude: 4,
      reflex: 1,
      will: 4
    },
    skills: {
      Concentration: 6,
      Discipline: 3,
      Listen: 1,
    }
}

export const linu5: NwnHero = {
    ...linu4,
    id: '15',
    startingLevel: {
        Cleric: 5
    },
    baseHp: 38,
    skills: {
        Concentration: 8,
        Discipline: 4,
        Listen: 1,
    }
}

export const linu6: NwnHero = {
    ...linu5,
    id: '16',
    startingLevel: {
      Cleric: 6
    },
    baseHp: 42,
    saves: {
      fortitude: 5,
      reflex: 2,
      will: 5
    },
    skills: {
      Concentration: 8,
      Discipline: 4,
      Listen: 1,
      Spot: 1
    }
}

export const linu7: NwnHero = {
    ...linu6,
    id: '17',
    startingLevel: {
        Cleric: 7
    },
    baseHp: 55,
    saves: {
      fortitude: 5,
      reflex: 2,
      will: 5
    },
    skills: {
      Concentration: 10,
      Discipline: 4,
      Listen: 1,
      Spot: 1
    }
}
