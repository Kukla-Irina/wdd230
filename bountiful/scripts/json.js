const dropdown1 = document.querySelector(".fruit1");
const dropdown2 = document.querySelector(".fruit2");
const dropdown3 = document.querySelector(".fruit3");

const requestURL =
  "https://brotherblazzard.github.io/canvas-content/fruit.json";

let fruits = [];

getArray();

async function getArray() {
  const response = await fetch(requestURL);

  fruits = await response.json();
  console.log(fruits);
  dropdownMenu();
}

function dropdownMenu(fruit) {
  for (let i = 0; i < fruits.length; i++) {
    option = document.createElement("option");
    option.text = fruits[i].name;
    dropdown1.add(option);
  }
  for (let i = 0; i < fruits.length; i++) {
    option = document.createElement("option");
    option.text = fruits[i].name;
    dropdown2.add(option);
  }
  for (let i = 0; i < fruits.length; i++) {
    option = document.createElement("option");
    option.text = fruits[i].name;
    dropdown3.add(option);
  }
}

//order

const button = document.querySelector(".submitbtn");

button.addEventListener("click", function () {
  const fruitOrder = document.querySelector("#fruitorder");

  if (fruitOrder.checkValidity()) {
    const orderInfo = document.querySelector(".orderinfo");
    const time = new Date().toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    const orderDate = document.createElement("p");
    const displayName = document.createElement("p");
    const displayEmail = document.createElement("p");
    const displayPhone = document.createElement("p");
    const displayFruit = document.createElement("p");
    const displayFruit1 = document.createElement("li");
    const displayFruit2 = document.createElement("li");
    const displayFruit3 = document.createElement("li");
    const special = document.createElement("p");
    const specialIns = document.createElement("p");
    const fruit1 = document.querySelector(".fruit1");
    const fruit2 = document.querySelector(".fruit2");
    const fruit3 = document.querySelector(".fruit3");
    const nutr = document.createElement("p");
    const carb = document.createElement("li");
    const prot = document.createElement("li");
    const fats = document.createElement("li");
    const sug = document.createElement("li");
    const cal = document.createElement("li");

    orderDate.textContent = `Order Date: ${time}`;
    displayName.textContent = `Name: ${document.querySelector("#fname").value}`;
    displayEmail.textContent = `Email: ${
      document.querySelector("#email").value
    }`;
    displayPhone.textContent = `Phone: ${
      document.querySelector("#phone").value
    }`;
    displayFruit.textContent = "Your Fruits:";
    displayFruit1.textContent = document.querySelector(".fruit1").value;
    displayFruit2.textContent = document.querySelector(".fruit2").value;
    displayFruit3.textContent = document.querySelector(".fruit3").value;
    special.textContent = "Spesial Instructions:";
    specialIns.textContent = document.querySelector("#special").value;
    nutr.textContent = "Nutritions:";

    orderInfo.appendChild(orderDate);
    orderInfo.appendChild(displayName);
    orderInfo.appendChild(displayEmail);
    orderInfo.appendChild(displayPhone);
    orderInfo.appendChild(displayFruit);
    orderInfo.appendChild(displayFruit1);
    orderInfo.appendChild(displayFruit2);
    orderInfo.appendChild(displayFruit3);
    orderInfo.appendChild(nutr);
    orderInfo.appendChild(carb);
    orderInfo.appendChild(prot);
    orderInfo.appendChild(fats);
    orderInfo.appendChild(sug);
    orderInfo.appendChild(cal);
    orderInfo.appendChild(special);
    orderInfo.appendChild(specialIns);

    let carbs = 0;
    let protein = 0;
    let fat = 0;
    let sugar = 0;
    let calories = 0;

    for (i = 0; i < fruits.length; i++) {
      if (fruit1.value == fruits[i].name) {
        carbs += fruits[i].nutritions.carbohydrates;
        protein += fruits[i].nutritions.protein;
        fat += fruits[i].nutritions.fat;
        sugar += fruits[i].nutritions.sugar;
        calories += fruits[i].nutritions.calories;
      }

      if (fruit2.value == fruits[i].name) {
        carbs += fruits[i].nutritions.carbohydrates;
        protein += fruits[i].nutritions.protein;
        fat += fruits[i].nutritions.fat;
        sugar += fruits[i].nutritions.sugar;
        calories += fruits[i].nutritions.calories;
      }

      if (fruit3.value == fruits[i].name) {
        carbs += fruits[i].nutritions.carbohydrates;
        protein += fruits[i].nutritions.protein;
        fat += fruits[i].nutritions.fat;
        sugar += fruits[i].nutritions.sugar;
        calories += fruits[i].nutritions.calories;
      }
    }

    carb.textContent = `Carbohydrates: ${Math.round(carbs * 10) / 10}`;
    prot.textContent = `Protein: ${Math.round(protein * 10) / 10}`;
    fats.textContent = `Fat: ${Math.round(fat * 10) / 10}`;
    sug.textContent = `Sugar: ${Math.round(sugar * 10) / 10}`;
    cal.textContent = `Calories: ${Math.round(calories * 10) / 10}`;

    button.className = "reset";
    document.querySelector(".reset").value =
      "Make another order";
    button.addEventListener("click", function () {
      orderInfo.className = "hidden";
      location.reload();
    });
  }
});
