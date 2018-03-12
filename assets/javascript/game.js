
// initialize variables
var cities = ["Dublin", "Limerick", "Waterford", "Galway", "Belfast", "Blarney", "Armagh"];


//

// computer chooses city from cities array
var city = cities[Math.floor(Math.random() * cities.length)];
console.log(city);

// this is test: remember to remove and add at end,   remove city from cities array
var indexOfCity = cities.indexOf(city);
cities.splice(indexOfCity, 1);
console.log(cities);

// convert name of city to upper case
cityUpper = city.toUpperCase();
console.log(cityUpper)

// make cityUpper into an array of individual letters
cityUpperArray = cityUpper.split("");
console.log(cityUpperArray);

// for each letter in cityUpperArray make a corresponding underline array
var underlineArray = [];
for (var i=0; i<cityUpperArray.length; i++){
    underlineArray.push("__ ");
}
console.log(underlineArray);

// removes the commas in array
var underlineDisplayArray = underlineArray.join(" ");
console.log(underlineDisplayArray);

// output underlineArray
var targetLines = document.getElementById("current-word");
    targetLines.textContent = underlineDisplayArray;
    console.log(targetLines);

// initialize number of wins    
var wins = 0;
var targetWins = document.getElementById("wins");
    targetWins.textContent = wins;
    console.log(targetWins);

// initialize number of guesses remaining    
var guessesRemaining = 12;
var targetGuessNum = document.getElementById("guesses");
    targetGuessNum.textContent = guessesRemaining;
    console.log(targetGuessNum);

