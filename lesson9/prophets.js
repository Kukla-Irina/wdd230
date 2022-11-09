const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets) 

    })
    function displayProphets(prophet) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let date = document.createElement('h3');
            let place = document.createElement('h3');
            let portrait = document.createElement('img');
            

            h2.textContent = prophet.name + ' ' + prophet.lastname;
            date.textContent = "date of birth " + prophet.birthdate + "\n";
            place.textContent = "place of birth " + prophet.birthplace + "\n";
            portrait.setAttribute('src', prophet.imageurl);
            portrait.setAttribute('alt',  prophet.name + ' ' + prophet.lastname +' '+ prophet.order);


            card.appendChild(h2);
            card.appendChild(date);
            card.appendChild(place);
            card.appendChild(portrait);

            document.querySelector('div.cards').appendChild(card);
    }



    

    
      
      
    
    