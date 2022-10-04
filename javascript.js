function getComputerChoice(){
    //Creates an array of choices the computer could have
    var choiceArray = [
        'Rock',
        'Paper',
        'Scissors'
    ];

    //Generates a random number between 0 and 2
    var randomNumber = Math.floor(Math.random() * 3);

    //Returns computers choice in the form of a string
    return choiceArray[randomNumber];
}

const computerSelection = getComputerChoice();
const playerSelection = "rock";
console.log(playRound(playerSelection, computerSelection));