"use strict";


// repository: https://github.com/kristjankristinsson/me132-U2.git

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
    for (let i = 0; i < fruits.length; i++) {
        let fruit = fruits[i];
       // fruit in our loop
        if (fruit.id == id) {
          // remove with splice
            fruits.splice(i, 1);
            return;
        }
    }
}




// Returns the fruits based on its origin country
function getFruitsByCountry(fruits, country){
    let FruitsByCountry = [];

    for (let fruit of fruits) {
        if (fruit.country.toLowerCase() == country.toLowerCase()) {
            FruitsByCountry.push(fruit);
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
    
    <div><li></li>${fruit.name}</div>
    <div>${fruit.color}</div>
    <div>${fruit.country}</div>
    <div>${fruit.day}+</div>
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
    // Remove-handlers for fruit
    RemoveFruitHandlers();
} 



// when fruit-form is submitted
function FruitSubmit(event){

    // not sending us to new page
    event.preventDefault();
    let name = document.getElementById("name").value;
    let color = document.getElementById("color").value;
    let country = document.getElementById("country").value;
    let day = Number(document.getElementById("day").value);

    //Fruit validator kollar så att det finns text i alla forms

    if (name, color, country, day == 0){
        alert("Please, fill all the following fields Name, Color, Country, Day");
        return false;
    }

    let fruit = NewFruit(name, color, country, day);
    // calculates new fruit id
    fruit.id = database[database.length - 1].id + 1;

    addFruitToDb(database, fruit)
    FruitRenderings(database);


    // reset all form fields on click
    let form = document.getElementById("fruit-form");
    form.reset();
} 


// Add fruit button with event handler
function FruitHandler() {
    let form = document.getElementById("fruit-form");
    form.addEventListener("submit", FruitSubmit); 
} 


// click to remove fruit
function RemoveFruitClick(fruiterer) {
    let button = fruiterer.target;
    let id = button.parentElement.id;
    if (confirm("Are you sure sir? Do you really want to delete?") == true) {
// uses the global variable db
    DelFruitById(database, id);
    } else return false;
// re-rendering without new fruit
    FruitRenderings(database);
    
} 


// click event handler to remove buttons
function RemoveFruitHandlers() {
    let buttons = document.querySelectorAll(".fruit button");

    for (let button of buttons) {
        button.addEventListener("click", RemoveFruitClick);
    }
} 

// filter the fruit by country
function FilterFruitByCountry(event) {
    event.preventDefault();
    let country = document.getElementById("filter-country").value;
    let fruits = getFruitsByCountry(database, country);
    FruitRenderings(fruits);
}




// filtering fruits by day 
function FilterByFruitDays(event) {
    event.preventDefault();
    let day = document.getElementById("filter-day").value;
    let fruits = FruitsByDays(database, day);
    FruitRenderings(fruits);
} 
// render shows all selections again
function ShowOnClick() {
    document.getElementById("filter-country").value = "";
    document.getElementById("filter-day").value = "";
    FruitRenderings(database);
}

// fruit handler for buttons and event listener
function filterFruitsHandler() {
    let countryFruit = document.getElementById("filter-by-country");
    let dayFruit = document.getElementById("filter-by-day");
    let showFruits = document.getElementById("show-fruits");
   
    countryFruit.addEventListener("submit", FilterFruitByCountry);
    dayFruit.addEventListener("submit", FilterByFruitDays);
    showFruits.addEventListener("click", ShowOnClick);

} 

// installing the page
FruitRenderings(database);
FruitHandler();
filterFruitsHandler();
