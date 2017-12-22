import * as types from '../constants';
/*
* synchronous action creators
*/

export function retrieveEntriesBegin() {
  return {
    type: types.RETRIEVE_INVOICES_BEGIN,
  };
}

export function onChangeVendorName(vendorName) {
  return {
    type: types.ON_CHANGE_VENDOR_NAME,
    vendorName,
  };
}


/*
* asynchronous action creators
*/

export function fetchInvoices() {

}
