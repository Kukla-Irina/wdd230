const requestURL = "data/users.json";

async function getUsers() {
  const response = await fetch(requestURL);
  const data = await response.json();
  const users = data.users;
  let adUsers = users.filter(
    (user) => user.membership == "Золото" || user.membership == "Серебро"
  );
  let newUsers = new Array();

  for (let i = 0; i < 2; i++) {
    rand = Math.floor(Math.random() * adUsers.length);
    newUsers.push(adUsers[rand]);
    adUsers.splice(rand, 1);
  }

  newUsers.forEach(showUsers);
}

function showUsers(user) {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let adress = document.createElement("h4");
    let phone = document.createElement("h4");
    let website = document.createElement("p");
    let logo = document.createElement("img");
  
    name.textContent = user.name;
    adress.textContent = user.adress;
    phone.textContent = user.phone;
    website.textContent = user.website;
    logo.setAttribute("src", user.image);
    logo.setAttribute("alt", user.name);
  
    card.appendChild(name);
    card.appendChild(logo);
    card.appendChild(adress);
    card.appendChild(phone);
    card.appendChild(website);

  show = document.querySelector(".spotlights").appendChild(card);

}

getUsers();
