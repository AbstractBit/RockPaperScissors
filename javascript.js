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

//playRound returns the result of who wins the round
function playRound(playerSelection, computerSelection){
    var result = '';
    if(playerSelection === computerSelection){
        result = "You tied!" + playerSelection + " ties " + computerSelection;
    }else if((playerSelection === 'Rock') & (computerSelection === 'Paper')){
        result = "You Lose! Paper beats Rock";
    }else if((playerSelection === 'Paper') & (computerSelection === 'Rock')){
        result = "You Win! Paper beats Rock";
    }else if((playerSelection === 'Rock') & (computerSelection === 'Scissors')){
        result = "You Win! Rock beats Scissors";
    }else if((playerSelection === 'Scissors') & (computerSelection === 'Rock')){
        result = "You Lose! Rock beats Scissors";
    }else if((playerSelection === 'Scissors') & (computerSelection === 'Paper')){
        result = "You Win! Scissors beats Paper";
    }else if((playerSelection === 'Paper') & (computerSelection === 'Scissors')){
        result = "You Lose! Scissors beats Paper";
    }else{
        result = "You did not choose a valid input!";
    }
    return result;
}

const computerSelection = getComputerChoice();
const playerSelection = "Rock";
console.log(playRound(playerSelection, computerSelection));