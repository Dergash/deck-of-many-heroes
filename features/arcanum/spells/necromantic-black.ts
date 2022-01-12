import { ArcanumSpell } from '../ruleset'

export const NecromanticBlackSpells: ArcanumSpell[] = [
    {
        name: 'Harm',
        college: 'Black Necromantic',
        rank: 1,
        level: 1,
        energy: 5,
        willpower: 6
    },
    {
        name: 'Conjure Spirit',
        college: 'Black Necromantic',
        rank: 2,
        level: 1,
        energy: 5,
        energyConsumption: 3,
        willpower: 9
    },
    {
        name: 'Summon Undead',
        college: 'Black Necromantic',
        rank: 3,
        level: 5,
        energy: 15,
        energyConsumption: 2,
        willpower: 12
    },
    {
        name: 'Create Undead',
        college: 'Black Necromantic',
        rank: 4,
        level: 10,
        energy: 20,
        energyConsumption: 3,
        willpower: 15
    },
    {
        name: 'Quench Life',
        college: 'Black Necromantic',
        rank: 5,
        level: 15,
        energy: 50,
        willpower: 18
    }
]
