const requestURL = "data/data.json";
const cards = document.querySelector(".grid");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const companies = jsonObject["companies"];
    companies.forEach(displayCompanies);
  });

function displayCompanies(company) {
  let card = document.createElement("section");
  let name = document.createElement("h2");
  let adress = document.createElement("h3");
  let phone = document.createElement("h3");
  let website = document.createElement("p");
  let logo = document.createElement("img");
  let membership = document.createElement("p");

  name.textContent = company.name;
  adress.textContent = company.adress + "\n";
  phone.textContent = company.phone + "\n";
  website.textContent = company.website;
  logo.setAttribute("src", company.image);
  logo.setAttribute("alt", company.name);
  membership.textContent = company.membership;

  card.appendChild(logo);
  card.appendChild(name);
  card.appendChild(adress);
  card.appendChild(phone);
  card.appendChild(website);
  card.appendChild(membership);

  document.querySelector("article.grid").appendChild(card);
}
//cards

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}
