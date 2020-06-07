import request from './request';
import { INTERLEDGER } from './constants';

function getLedgerURL(endpoint) {
  return `${INTERLEDGER.XPRING.BASE_URL}${
    INTERLEDGER.XPRING.ENDPOINTS[endpoint.toUpperCase()]
  }`;
}
function ledgerRequest(endpoint, opt) {
  const ledgerURL = getLedgerURL(endpoint);
  return request(ledgerURL, { ...opt, ...INTERLEDGER.XPRING.OPT })
    .then(ledgerResp => ledgerResp)
    .catch(ledgerErr => console.log(`An error has occured: ${ledgerErr}`));
}

export async function checkBalance(paymentPointer) {
  const responseData = await ledgerRequest('balance', { paymentPointer });
  return responseData;
}
export function makePayment(paymentPointer) {
  console.log(`Making payment to ${paymentPointer}`);
  return null;
}
export function requestPayment(paymentPointer) {
  console.log(`Requesting payment from ${paymentPointer}`);
  return null;
}
