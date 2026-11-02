let VictoryCount = 0
let LossCount = 0

function askNumber(whatNumber) {
    let userNumber = prompt("Guess 1-10?");

    if (userNumber == whatNumber) {
        VictoryCount = VictoryCount + 1
        $("#output").html("You guessed correctly! You have " + VictoryCount + " correct guesses!");
    }
    else {
        LossCount = LossCount + 1
        $("#output").html("Wrong! You have " + LossCount + " incorrect guesses...");
    }
}

$("#good-button").click(function () {
    let whatNumber = Math.floor(Math.random() * 10)+1;

    console.log(whatNumber)
    askNumber(whatNumber);
});