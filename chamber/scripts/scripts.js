const date = new Date();
const year = date.getFullYear();
const day = date.getDay ();
document.getElementById('year').textContent = year;
document.getElementById('updated').textContent = document.lastModified;

// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

const bannerEl = document.querySelector('.banner');

function bannerBlock() {
bannerEl.style.display = "block";
}

function bannerNone() {
	bannerEl.style.display = "none";
}

if (day === 1 || day === 2){
    bannerBlock();
}

else {
    bannerNone();
}

//Lazy load

// get all imgs with data src attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");

// optional parameters being set for the IntersectionObserver
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
}

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {image.removeAttribute("data-src");};
};

// first check to see if IntersectionObserver is supported
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imgOptions);

// loop through each img an check status and load if necessary

    imagesToLoad.forEach((img) => {observer.observe(img);});
}
// just load all images if not supported
else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

//number of visits

// initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

//cards 

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
