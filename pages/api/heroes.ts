// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { geoffrey, jayna, sogg, virgil } from '../../features/arcanum/heroes'
import {
  garrick, garrick2, garrick4, garrick6,
  imoen1, imoen2, imoen4, imoen6, imoenBg2_1200, imoenBg2_400,
  minsc, minsc2, minsc4, minsc6,
  tiax, viconi
} from '../../features/bg'
import {
  linu4, linu5, linu6, linu7,
  tomi4, tomi5, tomi6, tomi7
} from '../../features/nwn/heroes'
import { AnyHero } from '../../types/baseTypes'

type Data = AnyHero[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(getHeroes())
}

export function getHeroes(): AnyHero[] {
  return [
    imoen1,
    imoen2,
    imoen4,
    imoen6,
    virgil,
    imoenBg2_400,
    imoenBg2_1200,
    sogg,
    jayna,
    minsc,
    minsc2,
    minsc4,
    minsc6,
    garrick,
    garrick2,
    garrick4,
    garrick6,
    viconi,
    tiax,
    geoffrey,
    linu4,
    linu5,
    linu6,
    linu7,
    tomi4,
    tomi5,
    tomi6,
    tomi7
  ]
}
