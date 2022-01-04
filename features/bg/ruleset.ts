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
