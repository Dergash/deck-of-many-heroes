import { ArcanumSpell } from '../ruleset'

export const NecromanticWhiteSpells: ArcanumSpell[] = [
    {
        name: 'Minor Healing',
        college: 'White Necromantic',
        rank: 1,
        level: 1,
        energy: 5,
        willpower: 6
    },
    {
        name: 'Halt Poison',
        college: 'White Necromantic',
        rank: 2,
        level: 1,
        energy: 8,
        willpower: 9
    },
    {
        name: 'Major Healing',
        college: 'White Necromantic',
        rank: 3,
        level: 5,
        energy: 20,
        willpower: 12
    },
    {
        name: 'Sanctuary',
        college: 'White Necromantic',
        rank: 4,
        level: 10,
        energy: 15,
        energyConsumption: 5,
        willpower: 15
    },
    {
        name: 'Resurrect',
        college: 'White Necromantic',
        rank: 5,
        level: 15,
        energy: 50,
        willpower: 18
    }
]
