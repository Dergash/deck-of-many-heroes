import { NwnArmor } from '../ruleset'

const baseArmor: Pick<NwnArmor, 'acType' | 'type'> = {
    type: 'armor',
    acType: 'armor'
}

const baseShield: Pick<NwnArmor, 'acType' | 'type'> = {
    type: 'armor',
    acType: 'shield'
}

const baseBoots: Pick<NwnArmor, 'acType' | 'weight' | 'type'> = {
    type: 'armor',
    weight: 0.5,
    acType: 'dodge'
}

export const bandedMail: NwnArmor = {
    ...baseArmor,
    name: 'Banded Mail',
    ac: 6,
    cost: 200,
    weight: 45.0
}

export const largeShield: NwnArmor = {
    ...baseShield,
    name: 'Large Shield',
    ac: 2,
    cost: 50,
    weight: 15.0
}

export const bootsOfStriding1: NwnArmor = {
    ...baseBoots,
    name: 'Boots of Striding +1',
    cost: 1441,
    properties: [
        { type: 'ability', ability: 'Constitution', value: 1  }
    ]
}
