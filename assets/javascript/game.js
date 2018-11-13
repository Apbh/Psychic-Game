// Variables Defined
var wins = 0;
var losses = 0;
var guesses = 9;
var lettersChosen = [];
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerSelect = computerChoices[Math.floor(Math.random() * computerChoices.length)];



//Functions Defined
function guessesLeft() {
    document.getElementById("guesses").innerHTML = guesses;

}

function lettersUsed() {
    document.getElementById("letters-chosen").innerHTML = lettersChosen;
}


//Function to reset the game
function reset() {
    guesses = 9;
    console.log("Guess:", guesses);
    guessesLeft();
    lettersChosen = [];
    console.log("LC:", lettersChosen);
    lettersUsed();
}

//onkeyup function will be executed when a player selects a letter key

document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var userSelect = event.key.toLowerCase();

    }
    else {
        alert("Please select a letter!")
    }

    //These game conditions need to be met, to increase wins or losses by 1
    if (userSelect !== computerSelect) {
        guesses--;
        lettersChosen.push(userSelect);
        guessesLeft(0);
        lettersUsed();

    }

    if (userSelect === computerSelect) {
        alert("You are a Psychic!");
        wins++;
        document.querySelector("#wins").innerHTML = wins;
        reset();
  

    }

    if (guesses === 0) {
        alert("Sorry, you lose.")
        losses++;
        document.querySelector("#losses").innerHTML = losses;
        reset();
     
    }
}













