module.exports = {
  'collectCoverageFrom': [
    'src/**/*.{js,jsx}'
  ],
  'reporters': [ 'default', 'jest-junit' ],
  'coverageDirectory': 'UI-report',
  'resolver': 'jest-pnp-resolver',
  'testMatch': [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx}'
  ],
  'transform': {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.(css|styl|less|sass|scss)$': '<rootDir>/node_modules/jest-css-modules-transform',
    '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js'
  },
  'transformIgnorePatterns': [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$',
  ],
  'moduleNameMapper': {
    '^react-native$': 'react-native-web',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy'
  },
  'moduleFileExtensions': [
    'web.js',
    'js',
    'json',
    'web.jsx',
    'jsx',
    'node'
  ]
};