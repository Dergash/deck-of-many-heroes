import React from 'react'
import { NwnArmor, NwnWeapon } from './ruleset'
import styles from './NeverwinterItem.module.css'

export interface NeverwinterItemProps {
    item: NwnArmor | NwnWeapon
}

export function NeverwinterItem({ item }: NeverwinterItemProps) {
    return <span className={styles.container}>
        <span className={styles.label}>
            {item.name}
        </span>
        <div className={styles.tooltip}>
            { item.type === 'armor' &&
                <span>Armor Class: {item.ac}</span>
            }
            { item.type === 'weapon' && <>
                <span>Damage: {item.damage}</span>
                <span>Damage Type: {item.damageType}</span>
            </>}
            <span>Cost: {item.cost}</span>
            <span>Weight: {item.weight}</span>
        </div>
    </span>
}
