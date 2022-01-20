import { render, screen } from '@testing-library/react'
import { NeverwinterItem } from '../NeverwinterItem'
import { bandedMail } from '../items/armor'

describe('<NeverwinterItem />', () => {
    it('always renders item name', () => {
        render(<NeverwinterItem item={bandedMail} />)
        screen.findByText(bandedMail.name)
    })
})
