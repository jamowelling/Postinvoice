import * as types from '../constants';

const initialState = {
  invoices: [],
  newInvoice: {
    date: '',
    vendor: '',
  }
};

function invoices(state = initialState, action) {
  // Handle actions
  switch (action.type) {
    case types.ON_CHANGE_VENDOR_NAME:
      return {
        ...state,
        newInvoice: {
          ...state.newInvoice,
          vendor: action.vendorName,
        },
      };
    default:
      return state;
  }
}

export default invoices;
