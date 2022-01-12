import React, { memo, ReactNode } from 'react'
import styles from './DetailsCard.module.css'

/**
 * Sider with full card for the character
 *
 * TODO: should also include portrait and name?
 */
export function DetailsCard({ children }: { children: ReactNode }) {
    return <div className={styles.container}>
        {children}
    </div>
}

export default memo(DetailsCard)
