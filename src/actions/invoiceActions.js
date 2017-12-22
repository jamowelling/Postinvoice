/*
* synchronous action creators
*/

export const RETRIEVE_INVOICES_BEGIN = 'retrieve_invoices_begin';
export function retrieveEntriesBegin() {
  return {
    type: RETRIEVE_INVOICES_BEGIN,
  };
}


/*
* asynchronous action creators
*/

export function fetchInvoices() {

}
