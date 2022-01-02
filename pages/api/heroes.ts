// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Hero } from '../../types/types'

type Data = Hero[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(getHeroes())
}

export function getHeroes() {
  return [{ name: 'Imoen' }]
}
