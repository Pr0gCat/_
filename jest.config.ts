import type { Config } from '@jest/types';

const cfg: Config.InitialOptions = {
    preset: 'ts-jest',
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    testEnvironment: 'node',
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{ts,js}'],
    testMatch: ['src/**/__tests__/**/*.test.ts', 'tests/**/*.ts'],
    passWithNoTests: true
};

export default cfg;
