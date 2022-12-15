const dropdown1 = document.querySelector(".fruit1");
const dropdown2 = document.querySelector(".fruit2");
const dropdown3 = document.querySelector(".fruit3");

const requestURL =
  "https://brotherblazzard.github.io/canvas-content/fruit.json";

fetch(requestURL).then(function (response) {
  if (response.status !== 200) {
    console.warn(
      "Looks like there was a problem. Status Code: " + response.status
    );
    return;
  }

  response.json().then(function (data) {
    console.log(data);
    let option;

    for (let i = 0; i < data.length; i++) {
      option = document.createElement("option");
      option.text = data[i].name;
      dropdown1.add(option);
    }
    for (let i = 0; i < data.length; i++) {
      option = document.createElement("option");
      option.text = data[i].name;
      dropdown2.add(option);
    }
    for (let i = 0; i < data.length; i++) {
      option = document.createElement("option");
      option.text = data[i].name;
      dropdown3.add(option);
    }
  });
});
