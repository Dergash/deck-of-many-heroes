import { Bg1Proficiency, Bg2Proficiency } from "../features/bg/ruleset"
import { NwnHero } from "../features/nwn/ruleset"

export interface Hero {
    id: string
    name: string
    race: 'Human' | 'Elf' | 'Gnome' | 'Half-elf' | 'Half-Ogre'
    game: 'BG1' | 'BG1: ToSC' | 'BG2' | 'BG2: SoA' | 'BG2: ToB' | 'BG: EE' | 'BG: SoD' | 'BG2: EE' | 'NWN' | 'Arcanum'
    portrait: string
}

export type AnyHero = Bg1Hero | Bg2Hero | ArcanumHero | NwnHero

export interface BgHero extends Hero {
    game: 'BG1' | 'BG1: ToSC' | 'BG2' | 'BG2: SoA' | 'BG2: ToB' | 'BG: EE' | 'BG: SoD' | 'BG2: EE',
    startingXp: number
    proficiencies: Bg1Proficiency | Bg2Proficiency
}

export interface Bg1Hero extends BgHero {
    proficiencies: Bg1Proficiency
}

export interface Bg2Hero extends BgHero {
    proficiencies: Bg2Proficiency
}

export interface ArcanumHero extends Hero {
    game: 'Arcanum'
    startingLevel: number
}

export function isBgHero(hero: Hero): hero is BgHero {
    return ['BG1', 'BG1: ToSC', 'BG2', 'BG2: SoA', 'BG2: ToB', 'BG: EE', 'BG: SoD', 'BG2: EE'].includes(hero.game)
}

export function isArcanumHero(hero: Hero): hero is ArcanumHero {
    return hero.game === 'Arcanum'
}

export function isNwnHero(hero: Hero): hero is NwnHero {
    return hero.game === 'NWN'
}
