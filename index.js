import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'postinvoice.HomeScreen',
    title: 'Postinvoice',
    navigatorStyle: {
      navBarTitleTextCentered: true,
    },
    navigatorButtons: {
      rightButtons: [
        {
          title: 'Add',
          id: 'add',
        }
      ],
      leftButtons: [
        {
          title: 'sideMenu',
          id: 'sideMenu'
        }
      ],
    },
  },
});
