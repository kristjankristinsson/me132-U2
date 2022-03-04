"use strict";


// Creating a fruit and returning it.
function NewFruit(name, color, country, day){
    let fruit = {
        name: name,
        color: color,
        country: country,
        day: day,
    };

    return fruit;
} 



// Adding fruit to database.
function addFruitToDb(database, fruit) {
    database.push(fruit);
}

// Removes obj/fruit from database depending on its name
function DelFruitById(fruits, id) {
    for (let i = 0; i < fruits.length; i ++){
        let fruit = fruits[i];
       // fruit in our loop
        if (fruit.id == id) {
          // remove with splice
            fruits,splice(i, 1);
            return;
        }
    }
}




// Returns the fruits based on its origin country
function getFruitsByCountry(fruits, country){
    let FruitsByCountry = [];

    for (let fruit of fruits) {
        if (fruit.country.toLowerCase() == country.toLowerCase()) {

    }
  }
    return FruitsByCountry;
} 


// Returns all fruits depending on the days.
function FruitsByDays(fruits, day){
    let FruitsDays = [];

    for (let fruit of fruits) {
        if (fruit.day == day) {
            FruitsDays.push(fruit);
        }
    }

    return FruitsDays;
} 


// Rendering array of fruits in html
function FruitRendering(fruit){
    let div = document.createElement("div");
    div.classList.add("fruit");
    div.id = fruit.id;

    div.innerHTML = `
    
    <div>${fruit.name}</div>
    <div>${fruit.color}</div>
    <div>${fruit.country}</div>
    <div>${fruit.day}</div>
    <button class="button-remove" type="button">Remove</button>
    
    `;

    return div;

} 





// Rendering array of fruits in html
function FruitRenderings(fruits){
    let fruitsElement = document.getElementById("fruits");
    fruitsElement.innerHTML = "";
    // checking all the fruits and inserting.
    for(let fruit of fruits) {
        let fruitElement = FruitRendering(fruit);
        fruitsElement.appendChild(fruitElement);
    }
    // 
    RemoveFruitHandlers();
} 