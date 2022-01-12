import { Hero } from '../../types/baseTypes'

export interface ArcanumHero extends Hero {
    game: 'Arcanum'
    startingLevel: number
    spells?: ArcanumSpell[]
    strength: number
    constitution: number
    dexterity: number
    beauty: number
    intelligence: number
    willpower: number
    perception: number
    charisma: number
}

export type PrimaryStat = 'Strength' | 'Constitution' | 'Dexterity' | 'Beauty' | 'Intelligence' | 'Willpower' | 'Perception' | 'Charisma'

export type MagicCollege = 'Conveyance'
    | 'Divination'
    | 'Air'
    | 'Earth'
    | 'Fire'
    | 'Water'
    | 'Force'
    | 'Mental'
    | 'Meta'
    | 'Morph'
    | 'Nature'
    | 'Black Necromantic'
    | 'White Necrcomantic'
    | 'Phantasm'
    | 'Summoning'
    | 'Temporal'

export type MagicCollegeRank = 1 | 2 | 3 | 4 | 5

export type TechnologicalDisciplineRank = 1 | 2 | 3 | 4 | 5 | 6 | 7

export type ArcanumSkill = {
    name: ArcanumSkillName
    group: ArcanumSkillGroup
}

export type ArcanumSkillName = 'Bow' | 'Dodge' | 'Melee' | 'Throwing'
    | 'Backstab' | 'Pick Pocket' | 'Prowling' | 'Spot Traps'
    | 'Gambling' | 'Haggle' | 'Heal' | 'Persuasion'
    | 'Repair' | 'Firearms' | 'Pick Locks' | 'Disarm Traps'

export type ArcanumSkillGroup = 'Combat' | 'Thieving' | 'Social' | 'Technological'

export type ArcanumSpell = {
    /**
     * Minimum character level to cast this spell
     */
    level: number
    /**
     * Rank of the spell in college
     */
    rank: MagicCollegeRank
    /**
     * Minimum character willpower to cast this spell
     */
    willpower: number
    /**
     * Base energy consumption (with aptitude zero) to cast
     */
    energy: number
    /**
     * Base energy consumption to support this spell (each 10 seconds)
     */
    energyConsumption?: number
    /**
     * Name of the spell
     */
    name: string
    /**
     * Magic college including this spell
     */
    college: MagicCollege
}

export type TechnologicalDiscipline = 'Herbology'
    | 'Chemistry'
    | 'Electric'
    | 'Explosives'
    | 'Gun Smithy'
    | 'Mechanical'
    | 'Smithy'
    | 'Therapeutics'

export function isArcanumHero(hero: Hero): hero is ArcanumHero {
    return hero.game === 'Arcanum'
}

export type LevelingSchemeItem = Record<MagicCollege, MagicCollegeRank>
    | Record<TechnologicalDiscipline, TechnologicalDisciplineRank>
    | Record<keyof ArcanumSkill['name'], number>
    | Record<PrimaryStat, number>

export type LevelingScheme = LevelingSchemeItem[]

export function applyLevelingScheme(hero: ArcanumHero, scheme: LevelingSchemeItem) {
    // todo
}

export const levelProgression: Record<number, number> = {
    1: 0,
    2: 2100,
    3: 4600,
    4: 7700,
    5: 11400,
    6: 15500,
    7: 20300,
    8: 25600,
    9: 31600,
    10: 38300,
    11: 45600,
    12: 53600,
    13: 62400,
    14: 71900,
    15: 82200,
    16: 93300,
    17: 105300,
    18: 118200,
    19: 132000,
    20: 146700,
    21: 162500,
    22: 179300,
    23: 197200,
    24: 216300,
    25: 236500,
    26: 257900,
    27: 280600,
    28: 304600,
    29: 330000,
    30: 356800,
    31: 385100,
    32: 414900,
    33: 446300,
    34: 479500,
    35: 514300,
    36: 551000,
    37: 589500,
    38: 630000,
    39: 672500,
    40: 717100,
    41: 764000,
    42: 813100,
    43: 864600,
    44: 918500,
    45: 975000,
    46: 1034200,
    47: 1096200,
    48: 1161100,
    49: 1229000,
    50: 1300000
}
