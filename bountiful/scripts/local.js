//order

function createOrder() {

  //Check to see if the localstorage variable exists. If it does not, this is the first time coming to the page, and we need to initalize it to 0
  if (localStorage.getItem("drink") === null) {
    // Store
    localStorage.setItem("drink", "0");
  }

  // Get the value from local storage
  const value = parseInt(localStorage.getItem("drink"));

  // Incrememtnt the count by 1
  const newValue = value + 1;

  //Write the value back to local storage
  localStorage.setItem("drink", newValue);



}
