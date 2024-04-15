/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const jestConfig: Config = {
  preset: 'ts-jest',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageProvider: 'v8',
  coverageReporters: ['text'],
  moduleFileExtensions: ['js', 'ts'],
  roots: ['<rootDir>/src'],
  testEnvironment: '@happy-dom/jest-environment',
};

export default jestConfig;
