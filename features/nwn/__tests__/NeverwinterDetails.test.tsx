import { render, screen } from '@testing-library/react'
import { NeverwinterDetails } from '../NeverwinterDetails'
import { bandedMail, bootsOfStriding1, largeShield } from '../items/armor'
import { linu4 } from '../heroes'
import { mace1 } from '../items/weapon'

describe('<NeverwinterItem />', () => {
    it('renders equpment list', () => {
        render(<NeverwinterDetails hero={linu4} />)
        screen.findByText(bandedMail.name)
        screen.findByText(largeShield.name)
        screen.findByText(mace1.name)
        screen.findByText(bootsOfStriding1.name)
    })
})
