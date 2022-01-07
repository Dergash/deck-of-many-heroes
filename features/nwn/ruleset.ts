import { Hero } from '../../types/baseTypes'

export interface NwnHero extends Hero {
    startingLevel: Partial<Record<NwnClass, number>>
    strength: number
    dexterity: number
    constitution: number
    intelligence: number
    wisdom: number
    charisma: number
    saves: {
        fortitude: number
        reflex: number
        will: number
    }
    baseHp: number
    skills: Partial<Record<NwnSkill, number>>
}

export function isNwnHero(hero: Hero): hero is NwnHero {
    return hero.game === 'NWN'
}

export type NwnClass = 'Fighter'
    // Vanilla
    | 'Rogue'
    | 'Cleric'
    | 'Wizard'
    | 'Paladin'
    | 'Ranger'
    | 'Bard'
    | 'Druid'
    | 'Sorcerer'
    | 'Barbarian'
    // SoU
    | 'Blackguard'
    | 'Assasin'
    | 'Shadowdancer'
    | 'Arcane Archer'
    | 'Harper Scout'
    // HotU
    | 'Champion of Torm'
    | 'Dwarven Defender'
    | 'Pale Master'
    | 'Red Dragon Disciple'
    | 'Shifter'
    | 'Weapon Master'
    // 1.69
    | 'Purple Dragon Knigh'

export type NwnSkill = 'Animal Empathy'
    | 'Concentration'
    | 'Disable Trap'
    | 'Discipline'
    | 'Heal'
    | 'Hide'
    | 'Listen'
    | 'Lore'
    | 'Move Silently'
    | 'Open Lock'
    | 'Parry'
    | 'Perform'
    | 'Persuade'
    | 'Pick Pocket'
    | 'Search'
    | 'Set Trap'
    | 'Spellcraft'
    | 'Spot'
    | 'Taunt'
    | 'Use Magic Device'
    // SoU
    | 'Appraise'
    | 'Tumble'
    | 'Craft Trap'
    // HotU
    | 'Bluff'
    | 'Intimidate'
    | 'Craft Armor'
    | 'Craft Weapon'
    // 1.69
    | 'Ride'
