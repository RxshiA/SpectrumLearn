import 'react-native-gesture-handler/jestSetup';

jest.mock('expo-linear-gradient', () => ({
  LinearGradient: 'LinearGradient-mock',
}));

jest.mock('expo-modules-core', () => ({
  EventEmitter: {
    emit: jest.fn(),
    addListener: jest.fn(),
  },
}));

jest.mock('@expo/vector-icons', () => ({
  Feather: 'Feather-mock',
}));