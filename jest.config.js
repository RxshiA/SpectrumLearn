module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/babelTransformer.js',
    '^.+\\.svg$': 'jest-transform-stub',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|expo-linear-gradient|@expo/vector-icons)',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '^expo-linear-gradient$': '<rootDir>/__mocks__/expo-linear-gradient.ts',
    '^expo-modules-core$': '<rootDir>/__mocks__/expo-modules-core.ts',
    '^@expo/vector-icons$': '<rootDir>/__mocks__/@expo/vector-icons.ts',
    '^@expo/vector-icons/(.*)$': '<rootDir>/__mocks__/@expo/vector-icons.ts'
  },
  setupFiles: ['<rootDir>/jest/setup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};