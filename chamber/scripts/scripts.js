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
