const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',

    '^@/pages/(.*)$': '<rootDir>/pages/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: [
    'features/**/*.{ts,tsx}',
    'pages/**/*.{ts,tsx}',
    'styles/**/*.ts',
    '!**/ruleset.ts',
    '!**/index.ts'
  ]
}

module.exports = createJestConfig(customJestConfig)
