import { ArcanumHero } from '../features/arcanum'
import { Bg1Hero, Bg2Hero } from '../features/bg'
import { NwnHero } from '../features/nwn'

export interface Hero {
    id: string
    name: string
    race: 'Human' | 'Elf' | 'Gnome' | 'Half-elf' | 'Half-Ogre'
    game: 'BG1' | 'BG1: ToSC' | 'BG2' | 'BG2: SoA' | 'BG2: ToB' | 'BG: EE' | 'BG: SoD' | 'BG2: EE' | 'NWN' | 'Arcanum'
    portrait: string
    disabled?: boolean
}

export type AnyHero = Bg1Hero | Bg2Hero | ArcanumHero | NwnHero
