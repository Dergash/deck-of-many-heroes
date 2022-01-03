export interface Hero {
    id: string
    name: string
    race: 'Human' | 'Elf' | 'Gnome' | 'Half-elf' | 'Half-Ogre'
    game: 'BG1' | 'BG1: ToSC' | 'BG2' | 'BG2: SoA' | 'BG2: ToB' | 'BG: EE' | 'BG: SoD' | 'BG2: EE' | 'NWN' | 'Arcanum'
    portrait: string
}

export type AnyHero = BgHero | ArcanumHero

export interface BgHero extends Hero {
    game: 'BG1' | 'BG1: ToSC' | 'BG2' | 'BG2: SoA' | 'BG2: ToB' | 'BG: EE' | 'BG: SoD' | 'BG2: EE',
    startingXp: number
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
