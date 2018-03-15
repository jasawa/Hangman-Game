

   var wins = 0;
   function playGame() {
     var cities, guessedLetter, guessedLetters, city, indexOfCity, cityUpper, cityUpperArray, correctGuessStr, underlineArray, remainingLetters, guessesRemaining;
     //function setUpGame() {
       cities = ["Dublin", "Limerick", "Waterford", "Galway", "Belfast", "Blarney", "Armagh"];
       guessedLetters = [];
       document.getElementById('letters-already-guessed').textContent = guessedLetters;
       // computer chooses city from cities array
       city = cities[Math.floor(Math.random() * cities.length)];
       console.log(city);

       //
       //  remove currebt city from cities array
       indexOfCity = cities.indexOf(city);
       cities.splice(indexOfCity, 1);
       console.log(cities);

       // convert name of city to upper case
       cityUpper = city.toUpperCase();
       console.log(cityUpper);

       // make cityUpper into an array of individual letters
       cityUpperArray = cityUpper.split("");
       console.log(cityUpperArray);

       // for each letter in cityUpperArray make a corresponding underline array
       underlineArray = [];
       for (var i=0; i<cityUpperArray.length; i++){
           underlineArray[i] = "__ ";
           //is the same as underlineArray.push("__ ");
       }
       console.log("This is the underlineArray " + underlineArray);


       // turns array into string - automatically removing commas
       correctGuessStr = underlineArray.join(" ");
       console.log("This is correctGuessStr " + correctGuessStr);

       var targetCorrect = document.getElementById("current-word");
           targetCorrect.textContent = correctGuessStr;
           console.log(targetCorrect);


       // initialize number of wins
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
       var remainingLetters = cityUpperArray.length;

       var userGuess = "";

     //}
     //setUpGame();
        // User inputs choice
        document.onkeyup = function(event) {
           userGuess = event.key;
           if(guessedLetters.indexOf(userGuess) === -1) {
             guessedLetters.push(userGuess);
             var uGuessUp = userGuess.toUpperCase();
                 console.log(uGuessUp);

             // compare guess to letters
             var userGuessStr;
             for (var n=0; n<cityUpperArray.length; n++) {
                 if (cityUpperArray[n] === uGuessUp) {
                         console.log(cityUpperArray[n]);
                         underlineArray[n] = uGuessUp;
                             // .join will turn array into a string
                         correctGuessStr = underlineArray.join(" ");
                         userGuessStr = underlineArray.join("");
                         targetCorrect = document.getElementById("current-word");
                         targetCorrect.textContent = correctGuessStr;
                         remainingLetters--;

                 }
             }
             guessesRemaining--;

             targetGuessNum = document.getElementById("guesses");
             targetGuessNum.textContent = guessesRemaining;

             console.log("remainingLetters = " + remainingLetters);
             console.log("guesses that remain" + guessesRemaining);
             if(guessesRemaining === 0) {
               playGame();
             } else if (userGuessStr === cityUpper) {
               wins++;
               document.getElementById('wins').textContent = wins;
               playGame();
             }

         }
       }
            // make user guess uppercase

}
playGame();
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
