import { Navigation } from 'react-native-navigation';

import HomeScreen from './HomeScreen';
import SelectDateScreen from './AddInvoice/SelectDateScreen';
import SelectSupplierScreen from './AddInvoice/SelectSupplierScreen';
import InvoiceNumberScreen from './AddInvoice/InvoiceNumberScreen';
import CategoryBreakdownScreen from './AddInvoice/CategoryBreakdownScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('postinvoice.HomeScreen', () => HomeScreen);
  Navigation.registerComponent('postinvoice.SelectDateScreen', () => SelectDateScreen);
  Navigation.registerComponent('postinvoice.SelectSupplierScreen', () => SelectSupplierScreen);
  Navigation.registerComponent('postinvoice.InvoiceNumberScreen', () => InvoiceNumberScreen);
  Navigation.registerComponent('postinvoice.CategoryBreakdownScreen', () => CategoryBreakdownScreen); //eslint-disable-line
}
