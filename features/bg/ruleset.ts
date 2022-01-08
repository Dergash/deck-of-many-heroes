import { Hero } from '../../types/baseTypes'

export type Bg1HeroClass = 'Fighter'
    | 'Thief'
    | 'Cleric'
    | 'Mage'
    | 'Paladin'
    | 'Ranger'
    | 'Bard'

export type Bg1Proficiency = Partial<{
    Bow: number
    'Spiked Weapons': number
    'Small Sword': number
    'Large Sword': number
    Axe: number
    'Blunt Weapons': number
    'Missile Weapons': number
    Spear: number
}>

export type Bg2Proficiency = {
    // todo
}

export interface BgHero extends Hero {
    game: 'BG1' | 'BG1: ToSC' | 'BG2' | 'BG2: SoA' | 'BG2: ToB' | 'BG: EE' | 'BG: SoD' | 'BG2: EE',
    startingXp: number
    hp: number
    lore: number
    skills?: Partial<{
        'Open Locks': number
        'Stealth': number
        'Find Traps': number
        'Pick Pockets': number
    }>
    proficiencies: Bg1Proficiency | Bg2Proficiency
}

export interface Bg1Hero extends BgHero {
    proficiencies: Bg1Proficiency
}

export interface Bg2Hero extends BgHero {
    proficiencies: Bg2Proficiency
}

export function isBgHero(hero: Hero): hero is BgHero {
    return ['BG1', 'BG1: ToSC', 'BG2', 'BG2: SoA', 'BG2: ToB', 'BG: EE', 'BG: SoD', 'BG2: EE'].includes(hero.game)
}
