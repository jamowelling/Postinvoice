import { Navigation } from 'react-native-navigation';

import HomeScreen from './HomeScreen';
import SecondScreen from './SecondScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('postinvoice.HomeScreen', () => HomeScreen);
  Navigation.registerComponent('postinvoice.SecondScreen', () => SecondScreen);
}
