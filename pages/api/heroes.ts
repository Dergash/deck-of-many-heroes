// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { AnyHero } from '../../types/types'

type Data = AnyHero[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(getHeroes())
}

export function getHeroes(): AnyHero[] {
  return [
    {
      id: '1', // todo: filenames
      name: 'Imoen',
      race: 'Human',
      game: 'BG1',
      startingXp: 9,
      portrait: 'bg1-imoen.png',
      proficiencies: {
        Bow: 1,
        'Small Sword': 1
      }
    },
    {
      id: '2',
      name: 'Imoen',
      race: 'Human',
      game: 'BG1',
      startingXp: 1304 ,
      portrait: 'bg1-imoen.png',
      proficiencies: {
        Bow: 1,
        'Small Sword': 1
      }
    },
    {
      id: '3',
      name: 'Imoen',
      race: 'Human',
      game: 'BG1',
      startingXp: 5124,
      portrait: 'bg1-imoen.png',
      proficiencies: {
        Bow: 1,
        'Small Sword': 1
      }
    },
    {
      id: '4',
      name: 'Imoen',
      race: 'Human',
      game: 'BG1',
      startingXp: 20636,
      portrait: 'bg1-imoen.png',
      proficiencies: {
        Bow: 1,
        'Small Sword': 1,
        "Blunt Weapons": 1
      }
    },
    {
      id: '5',
      name: 'Virgil',
      race: 'Human',
      game: 'Arcanum',
      startingLevel: 1,
      portrait: 'arcanum-virgil.png'
    },
    {
      id: '6',
      name: 'Imoen',
      race: 'Human',
      game: 'BG2: SoA',
      startingXp: 400000,
      portrait: 'bg2-imoen.jpg',
      proficiencies: {}
    },
    {
      id: '7',
      name: 'Imoen',
      race: 'Human',
      game: 'BG2: SoA',
      startingXp: 1200000,
      portrait: 'bg2-imoen.jpg',
      proficiencies: {}
    },
   {
     id: '8',
     name: 'Sogg Mead Mug',
     race: 'Half-Ogre',
     game: 'Arcanum',
     startingLevel: 2,
     portrait: 'sogg.png'
   },
   {
     id: '9',
     name: 'Jayna Stiles',
     race: 'Half-elf',
     game: 'Arcanum',
     portrait: 'NPCJay.bmp',
     startingLevel: 5
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
     disabled: true
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
     disabled: true
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
    disabled: true
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
    disabled: true
   },
   {
     id: '13',
     name: 'Geoffrey Tarellonde-Ashe',
     race: 'Human',
     game: 'Arcanum',
     portrait: 'arcanum-geoffrey.png',
     startingLevel: 12
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
  }
  ]
}
