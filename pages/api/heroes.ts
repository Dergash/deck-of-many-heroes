// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { BgHero } from '../../features/bg'
import { AnyHero } from '../../types/baseTypes'

type Data = AnyHero[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(getHeroes())
}

const baseBg1Imoen: BgHero = {
  id: '1', // todo: filenames
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

export function getHeroes(): AnyHero[] {
  return [
    {
      ...baseBg1Imoen,
    },
    {
      ...baseBg1Imoen,
      id: '2',
      startingXp: 1304,
      hp: 10,
      lore: 6,
      skills: {
        Stealth: 20,
        'Find Traps': 30
      }
    },
    {
      ...baseBg1Imoen,
      id: '3',
      startingXp: 5124,
      hp: 21,
      lore: 12,
      skills: {
        Stealth: 40,
        'Find Traps': 50
      }
    },
    {
      ...baseBg1Imoen,
      id: '4',
      startingXp: 20636,
      hp: 31,
      proficiencies: {
        Bow: 1,
        'Small Sword': 1,
        "Blunt Weapons": 1
      },
      lore: 18,
      skills: {
        'Move Silently': 60,
        'Find Traps': 70
      }
    },
    {
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
      charisma: 8
    },
    {
      id: '6',
      name: 'Imoen',
      race: 'Human',
      game: 'BG2: SoA',
      startingXp: 400000,
      portrait: 'bg2-imoen.jpg',
      proficiencies: {},
      hp: 57,
      lore: 31
    },
    {
      id: '7',
      name: 'Imoen',
      race: 'Human',
      game: 'BG2: SoA',
      startingXp: 1200000,
      portrait: 'bg2-imoen.jpg',
      proficiencies: {},
      hp: 69,
      lore: 46
    },
   {
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
     charisma: 8
   },
   {
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
     charisma: 8
   },
   {
     id: '10',
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
     disabled: true,
     hp: 10,
     lore: 1
   },
   {
     id: '11',
     name: 'Garrick',
     race: 'Human',
     game: 'BG1',
     portrait: 'bg1-garrick.png',
     startingXp: 76,
     proficiencies: {
        'Small Sword': 1,
        'Missile Weapons': 1
     },
     disabled: true,
     hp: 6,
     lore: 10
   },
   {
    id: '11',
    name: 'Viconia DeVir',
    race: 'Elf',
    game: 'BG1',
    portrait: 'bg1-viconia.png',
    startingXp: 1603,
    proficiencies: {
      'Blunt Weapons': 1,
      'Missile Weapons': 1
    },
    disabled: true,
    hp: 12,
    lore: 2
   },
   {
     id: '12',
     name: 'Tiax',
     race: 'Gnome',
     game: 'BG1',
     portrait: 'bg1-tiax.png',
     startingXp: 3091,
     proficiencies: {
      'Blunt Weapons': 1,
      'Missile Weapons': 1
    },
    disabled: true,
    lore: 8,
    hp: 17
   },
   {
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
     charisma: 8
   },
   {
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
   },
   {
    id: '15',
    name: 'Linu La\'neral',
    race: 'Elf',
    game: 'NWN',
    startingLevel: {
      Cleric: 5
    },
    strength: 16,
    dexterity: 10,
    constitution: 14,
    intelligence: 10,
    wisdom: 16,
    charisma: 12,
    portrait: 'nwn-linu.png',
    baseHp: 38,
    saves: {
      fortitude: 4,
      reflex: 1,
      will: 4
    },
    skills: {
      Concentration: 8,
      Discipline: 4,
      Listen: 1,
    }
  },
   {
    id: '16',
    name: 'Linu La\'neral',
    race: 'Elf',
    game: 'NWN',
    startingLevel: {
      Cleric: 6
    },
    strength: 16,
    dexterity: 10,
    constitution: 14,
    intelligence: 10,
    wisdom: 16,
    charisma: 12,
    portrait: 'nwn-linu.png',
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
  },
  {
   id: '17',
   name: 'Linu La\'neral',
   race: 'Elf',
   game: 'NWN',
   startingLevel: {
     Cleric: 7
   },
   strength: 16,
   dexterity: 10,
   constitution: 14,
   intelligence: 10,
   wisdom: 16,
   charisma: 12,
   portrait: 'nwn-linu.png',
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
  ]
}
