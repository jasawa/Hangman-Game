
// variables
var cities = ["Dublin", "Limerick", "Waterford", "Galway", "Belfast", "Blarney", "Armagh"];
var wins = 0;

// FUNCTIONS

// Function to render city
function renderCity() {
    if (cities.length < 1) {
        document.querySelector("#instructions").innerHTML = "Game Over! Thank you for playing!";
    }
    else {
        // computer chooses city from cities array
        var city = cities[Math.floor(Math.random() * cities.length)];
            console.log(city);
        // convert name of city to upper case
        var cityUpper = city.toUpperCase();
            console.log(cityUpper);
        // make cityUpper into an array of individual letters
        var cityUpperArray = cityUpper.split("");
            console.log(cityUpperArray);
        // for each letter in cityUpperArray make a corresponding underline array
        var underlineArray = [];
        for (var i=0; i<cityUpperArray.length; i++){
            underlineArray[i] = "__ ";
                    //is the same as underlineArray.push("__ ");
        }
            console.log("This is the underlineArray " + underlineArray);

        // turns array into string - automatically removing commas
        var correctGuessStr = underlineArray.join(" ");
        console.log("This is correctGuessStr " + correctGuessStr);
        // display
        var targetCorrect = document.getElementById("current-word");
            targetCorrect.textContent = correctGuessStr;
            console.log(targetCorrect);
        
        // remove city from cities array
        var indexOfCity = cities.indexOf(city);
        cities.splice(indexOfCity, 1);
        console.log(cities);

    }
}



// update wins   

var targetWins = document.getElementById("wins");
    targetWins.textContent = wins;
    console.log(targetWins);

// initialize number of guesses remaining    
var guessesRemaining = 12;
var targetGuessNum = document.getElementById("guesses");
    targetGuessNum.textContent = guessesRemaining;
    console.log(targetGuessNum);

// initialize letters that have already been used
var pastUserGuess = [];
var targetPastUGuess = document.getElementById("letters-already-guessed");
    targetPastUGuess.textContent = pastUserGuess;
    console.log(pastUserGuess);

// initialize letters that remain to be guessed
window.cityUpperArray = cityUpperArray;
var remainingLetters = cityUpperArray.length;

var userGuess = "";


    // Calling function to start game
    renderCity();


        document.onkeyup = function(event) {
            // if there are no more unknown letters or no more guesses remaining, stop the function
            if ((remainingLetters < 1) || (guessesRemaining < 1)){
                return;
            }
          userGuess = event.key;
          
            // make user guess uppercase
            var uGuessUp = userGuess.toUpperCase();
                console.log(uGuessUp);

            // compare guess to letters
            for (var n=0; n<cityUpperArray.length; n++) {
                if (cityUpperArray[n] === uGuessUp) {
                        console.log(cityUpperArray[n]);
                        underlineArray[n] = uGuessUp;
                            // .join will turn array into a string
                        correctGuessStr = underlineArray.join(" ");
                    
                        targetCorrect = document.getElementById("current-word");
                        targetCorrect.textContent = correctGuessStr;
                        remainingLetters--;
                       
                }
            }
            guessesRemaining--;
            targetGuessNum = document.getElementById("guesses");
            targetGuessNum.textContent = guessesRemaining;    
            
            console.log("remainingLetters = " + remainingLetters)
            console.log("guesses that remain" + guessesRemaining);
        
        }
        
renderCity();
        
    //}  
    //}
    //while (remainingLetters > 0);
    //end loop for input of new letter   
    
    
                /*
                    // compare with previous guesses
                    for (var j = 0; j < pastUserGuess.length; j++) {
                        if (uGuessUp === pastUserGuess[j]) {
                            console.log("You already guessed that letter")
                        }
                        else
                            // add current userGuess to past User Guesses
                            pastUserGuess.splice(0, 0, uGuessUp);
                            console.log(pastUserGuess);
                            // print all the letters the user has guessed
                            targetPastUGuess = document.getElementById("letters-already-guessed");
                                targetPastUGuess.textContent = pastUserGuess;
                                console.log(targetPastUGuess);       
                    } */



