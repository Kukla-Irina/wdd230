//menu

const hambutton = document.querySelector(".ham");
const mainnav = document.querySelector(".navigation");

hambutton.addEventListener(
  "click",
  () => {
    mainnav.classList.toggle("responsive");
  },
  false
);

window.onresize = () => {
  if (window.innerWidth > 760) mainnav.classList.remove("responsive");
};

//update

const date = new Date();
const year = date.getFullYear();
const day = date.getDay();
document.getElementById("year").textContent = year;
document.getElementById("updated").textContent = document.lastModified;

// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  now
);

//order

function createOrder() {

  console.log('run');

  //Check to see if the localstorage variable exists. If it does not, this is the first time coming to the page, and we need to initalize it to 0
  if (localStorage.getItem("drink") === null) {
    // Store
    localStorage.setItem("drink", "0");
  }

  // Get the value from local storage
  const value = parseInt(localStorage.getItem("drink"));

  // Incrememtnt the count by 1
  const newValue = value + 1

  //Write the value back to local storage
  localStorage.setItem("drink", newValue);

}
const displayOrders = localStorage.getItem('drink');
document.getElementById("drink").innerHTML = displayOrders;