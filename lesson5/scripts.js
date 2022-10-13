let date = new Date();
let year = date.getFullYear();
document.getElementById('year').textContent = year;
document.getElementById('updated').textContent = document.lastModified;

//create three variables that hold references to the input, button, and list elements using const.
const list = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.querySelector('input');

//create an click event listener for the Add Chapter button using addEventListener and an anonymous function.
//make sure the input is not blank.
button.addEventListener('click', function(){
    if (input.value == ""){
        alert("You need to type something here!");
    }
    else{
        //create an li element.
        const li = document.createElement("li");

        //create a delete button
        const delButton = document.createElement("button");

        //populate the li elements textContent or innerHTML with the input
        li.innerHTML = input.value;

        //populate the button textContent with an ❌
        delButton.textContent = "❌";

        // append the li element with the delete button
        li.append(delButton);

        // append the list element with the li element just created and appended with text and the delete button
        list.append(li);

        // add an event listener to the delete button that removes the li element when clicked
        delButton.addEventListener('click', function(){
            list.removeChild(li);
        })

        // send the focus to the input element
        input.focus();

        // clean up the successful add of a chapter by changing the input to nothing or the empty string and setting the focus to the input.
        input.value = "";

    }
})