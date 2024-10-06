export default {
    clearMocks: true,
    testEnvironment: "jsdom",
    coveragePathIgnorePatterns: [
        "\\\\node_modules\\\\"
    ],
    moduleFileExtensions: [
        "js",
        "jsx",
        "ts",
        "tsx",
        "json",
        "node"
    ],
    coverageReporters: [
        'json',
        'text',
        'lcov',
        'clover',
    ],
    moduleDirectories: [
        "node_modules",
    ],
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy',
        '\\.svg': '<rootDir>/config/jest/jestEmptyComponent.tsx',
        '@app/(.*)': '<rootDir>/src/app/$1',
        '@shared/(.*)': '<rootDir>/src/shared/$1',
        '@pages/(.*)': '<rootDir>/src/pages/$1',
        '@widgets/(.*)': '<rootDir>/src/widgets/$1',
    },
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
    modulePaths: [
        '<rootDir>src'
    ],
    rootDir: '../../', // Проверь этот путь
    setupFilesAfterEnv: ['<rootDir>config/jest/setupTest.ts'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.tsx?$': 'ts-jest',
    },
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json', // путь к твоему tsconfig.json
        },
    },
};
