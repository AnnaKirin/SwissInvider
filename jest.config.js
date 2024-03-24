module.exports = {
    transform: {
        '^.+\\.mjs$': 'babel-jest',
    },
    transformIgnorePatterns: [],
    setupFilesAfterEnv: ['esm'],
};