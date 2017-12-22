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
    default:
      return state;
  }
}

export default invoices;
