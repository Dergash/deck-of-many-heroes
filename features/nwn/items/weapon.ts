import { NwnWeapon } from '../ruleset'

export const mace: NwnWeapon = {
    type: 'weapon',
    name: 'Mace',
    damage: '1d6',
    damageType: 'Bludgeoning',
    cost: 10,
    weight: 6.0
}

export const mace1: NwnWeapon = {
    ...mace,
    cost: 1628,
    properties: [{ type: 'enhancement', value: 1 }]
}
