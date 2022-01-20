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
    equipment?: {
        skin?: NwnArmor
        armor?: NwnArmor
        shield?: NwnArmor
        boots?: NwnArmor
        weapon?: NwnWeapon 
    }
}

export type NwnAbility = 'Strength' | 'Constitution' | 'Dexterity' | 'Intelligence' | 'Wisdom' | 'Charisma'

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

export type NwnArmor = {
    type: 'armor'
    name: string
    ac?: number
    acType: NwnAcType
    cost: number 
    properties?: NwnItemProperty[]
    weight: number
}

export type NwnItemProperty = NwnAbilityBonus | NwnEnhancement

export type NwnAbilityBonus = {
    type: 'ability'
    ability: NwnAbility
    value: number
}

export type NwnEnhancement = {
    type: 'enhancement'
    value: number
}

export type NwnAcType = 'armor' | 'shield' | 'deflection' | 'nature' | 'dodge'

export type NwnWeapon = {
    type: 'weapon'
    name: string
    damage: string
    damageType: NwnPhysicalDamage
    cost: number
    properties?: NwnItemProperty[]
    weight: number
}

export type NwnPhysicalDamage = 'Bludgeoning' | 'Piercing' | 'Slashing' | 'Bludgeoning-Piercing' | 'Piercing-Slashing'

export type NwnElementalDamage = 'Fire' | 'Cold' | 'Acid' | 'Electrical'

export type NwnEnergyDamage = 'Sonic' | 'Positive' | 'Negative'

export type NwnMagicalDamage = 'Divine' | 'Magical'

export type NwnDamageType = NwnPhysicalDamage | NwnElementalDamage | NwnEnergyDamage | NwnMagicalDamage
