// Declare global variable customerName
var customerName = 'bob';

function upperCaseCustomerName() {
  return customerName.toUpperCase();
}

// Define function to set global variable bestCustomer
function setBestCustomer() {
  window.bestCustomer = 'not bob';
  // Note: using the `window` object explicitly is not strictly necessary,
  // but it makes it clear that we are creating a global variable.
}

// Define function to overwrite global variable bestCustomer
function overwriteBestCustomer() {
  window.bestCustomer = 'maybe bob';
}

// Declare constant leastFavoriteCustomer in global scope
const leastFavoriteCustomer = 'John';

// Define function to attempt to change leastFavoriteCustomer constant
function changeLeastFavoriteCustomer() {
  // This will throw an error in strict mode
  leastFavoriteCustomer = 'Jane';
}