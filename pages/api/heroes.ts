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
      portrait: 'bg1-imoen.png'
    },
    /*
    {
      id: '2',
      name: 'Imoen',
      race: 'Human',
      game: 'BG1',
      startingXp: 1304 ,
      portrait: 'bg1-imoen.png'
    },
    {
      id: '3',
      name: 'Imoen',
      race: 'Human',
      game: 'BG1',
      startingXp: 5124,
      portrait: 'bg1-imoen.png'
    },
    {
      id: '4',
      name: 'Imoen',
      race: 'Human',
      game: 'BG1',
      startingXp: 20636,
      portrait: 'bg1-imoen.png'
    },
    */
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
    },
    /*
    {
      id: '7',
      name: 'Imoen',
      race: 'Human',
      game: 'BG2: SoA',
      startingXp: 1200000,
      portrait: 'bg2-imoen.jpg',
    },
    */
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
     startingXp: 258
   },
   {
     id: '11',
     name: 'Garrick',
     race: 'Human',
     game: 'BG1',
     portrait: 'bg1-garrick.png',
     startingXp: 76
   },
   {
    id: '11',
    name: 'Viconia DeVir',
    race: 'Elf',
    game: 'BG1',
    portrait: 'bg1-viconia.png',
    startingXp: 1603
   },
   {
     id: '12',
     name: 'Tiax',
     race: 'Gnome',
     game: 'BG1',
     portrait: 'bg1-tiax.png',
     startingXp: 3091
   },
   {
     id: '13',
     name: 'Geoffrey Tarellonde-Ashe',
     race: 'Human',
     game: 'Arcanum',
     portrait: 'arcanum-geoffrey.png',
     startingLevel: 12
   }
  ]
}
