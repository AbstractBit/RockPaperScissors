//Capitalizes the first letter and lowercases the rest
function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
//Randomly selects the computers choice
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
        result = "You tied! " + playerSelection + " ties " + computerSelection;
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
//Plays 5 rounds and displays the winner
function game(){
    var playerScore = 0;
    var computerScore = 0;
    var round = 1;

//    while((playerScore < 5) || (computerScore < 5)){
        let results = "";

        const buttons = document.querySelectorAll('button');

        
/*        
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                results = playRound(button.id, getComputerChoice());
            })
        });
        
            console.log("Round " + round + ": " + results);
                if(results.substring(0,8) === "You Win!"){
                    playerScore++;
                    round++;
                }else if(results.substring(0,8) === "You Lose"){
                    computerScore++;
                    round++;
                }else{
                    round++;
                }
                console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
 */              /* if(playerScore > 5 || computerScore > 5){
                    return false;
                }*/


/*        
        console.log("Round " + round + ": " + results);

        if(results.substring(0,8) === "You Win!"){
            playerScore++;
            round++;
        }else if(results.substring(0,8) === "You Lose"){
            computerScore++;
            round++;
        }else if(results === "You did not choose a valid input!"){
            --round;
            console.log("Try again!");
        }
//    };

    console.log("players score: " + playerScore + " Computer score: " + computerScore);
    if(playerScore > computerScore){
        console.log("You win!");
    }else{
        console.log("You lose.");
    }
    */
}

game();

