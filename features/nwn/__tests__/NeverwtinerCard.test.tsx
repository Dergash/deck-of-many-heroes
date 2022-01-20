import { render, screen } from '@testing-library/react'
import { NeverwinterCard } from '../NeverwinterCard'
import { linu4, tomi4 } from '../heroes'

describe('<NeverwinterCard />', () => {
    it('uses smaller font for long character names', () => {
        render(<NeverwinterCard hero={[tomi4]} />)
        const longName = screen.getByText('Tomi Undergallows')
        expect(longName.className.includes('small')).toBe(true)
        render(<NeverwinterCard hero={[linu4]} />)
        const shortName = screen.getByText('Linu La\'neral')
        expect(shortName.className.includes('small')).toBe(false)
    })

    it('shows hero class', () => {
        render(<NeverwinterCard hero={[linu4]} />)
        expect(screen.getByText(/Cleric 4/)).toBeDefined()
    })
})
