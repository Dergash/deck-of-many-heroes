import {parseLevelingScheme} from '../utils'

describe('Arcanum utils', () => {
    it('should parse leveling schemes', () => {
        const scheme = parseLevelingScheme('`{1}Hero {necro_good 1}')
        expect(scheme.length).toBe(1)
        expect(scheme[0].type).toBe('spell')
    })
})
