import { ArcanumSpell } from '../ruleset'

export const NatureSpells: ArcanumSpell[] = [
    {
        name: 'Charm Beast',
        college: 'Nature',
        rank: 1,
        level: 1,
        energy: 8,
        willpower: 6
    },
    {
        name: 'Entangle',
        college: 'Nature',
        rank: 2,
        level: 1,
        energy: 5,
        energyConsumption: 2,
        willpower: 9
    },
    {
        name: 'Control Beast',
        college: 'Nature',
        rank: 3,
        level: 5,
        energy: 15,
        energyConsumption: 2,
        willpower: 12
    },
    {
        name: 'Succour Beast',
        college: 'Nature',
        rank: 4,
        level: 10,
        energy: 20,
        energyConsumption: 4,
        willpower: 15
    },
    {
        name: 'Regenerate',
        college: 'Nature',
        rank: 5,
        level: 15,
        energy: 25,
        energyConsumption: 5,
        willpower: 18
    }
]
