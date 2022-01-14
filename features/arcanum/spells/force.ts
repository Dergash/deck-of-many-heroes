import { ArcanumSpell } from '../ruleset'

export const ForceSpells: ArcanumSpell[] = [
    {
        name: 'Shield of Protection',
        college: 'Force',
        rank: 1,
        level: 1,
        energy: 5,
        energyConsumption: 1,
        willpower: 6
    },
    {
        name: 'Jolt',
        college: 'Force',
        rank: 2,
        level: 1,
        energy: 10,
        willpower: 9
    },
    {
        name: 'Wall of Force',
        college: 'Force',
        rank: 3,
        level: 5,
        energy: 15,
        energyConsumption: 2,
        willpower: 12
    },
    {
        name: 'Bolt of Lightning',
        college: 'Force',
        rank: 4,
        level: 10,
        energy: 25,
        willpower: 15
    },
    {
        name: 'Disintegrate',
        college: 'Force',
        rank: 5,
        level: 15,
        energy: 50,
        willpower: 18
    }
]
