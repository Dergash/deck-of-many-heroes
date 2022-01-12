import React, { memo, ReactNode } from 'react'
import cn from '../../styles/cn'
import styles from './DetailsCard.module.css'

export interface DetailsCardProps {
    name: string
    children?: ReactNode
}

/**
 * Sider with full card for the character
 *
 * TODO: should also include portrait and name?
 */
export function DetailsCard({ name, children }: DetailsCardProps) {
    return <div className={styles.container}>
        <header className={styles.header}>
            <h2 className={cn(styles.name, { [styles.small]: name.length > 20 })}>
                {name}
            </h2>
        </header>
        <hr />
        <section className={styles.content}>
            {children}
        </section>
    </div>
}

export default memo(DetailsCard)
