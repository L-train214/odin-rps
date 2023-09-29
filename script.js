let playerSelection;
function getComputerChoice() {
    let computerRandomNumber = Math.floor(Math.random() * 3); 
        switch(computerRandomNumber){
            case 0:
                return "rock";
            case 1:
                return "paper";
            case 2:
                return "scissors";
        }
        return computerRandomNumber;

}

/* the default parameter was set to stop getting type errors while debugging without having to input an player choice*/
function oneMatch(playerSelection = "rock", computerSelection){

if(playerSelection === computerSelection){
    return "you tied, try again!";
}else if(playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper" ){
    return "you won, good job...Or was it just luck?";
}else if ( playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock" ){
    return "you lost, better luck next time!";
} else{
    return "There was an unexpected result, probably need to check conditional statements";
}
}

function getPlayerChoice(){
 let playerPick = prompt("take your pick, rock, paper, or scissors?");
 if (playerPick === null ){
     playerPick = "rock";
 }else{
    playerPick = playerPick.toLowerCase();
 }
 return playerPick;

}

function game(){
let computerScore = 0;
let playerScore = 0;
let tiedRounds = 0;

switch(oneMatch(getPlayerChoice() ,getComputerChoice())){
    case "you lost, better luck next time!": 
        computerScore++;
        console.log(`the computer won that match! computer: ${computerScore} player:${playerScore} ties:${tiedRounds}`);
        break;
    case "you won, good job...Or was it just luck?": 
        playerScore++;
        console.log(`you won! player: ${playerScore} computer: ${computerScore}  ties: ${tiedRounds}`);
        break;
    case "you tied, try again!": 
        tiedRounds++;
        console.log(`you tied! player: ${playerScore} computer: ${computerScore}  ties: ${tiedRounds}`);
}
switch(oneMatch(getPlayerChoice() ,getComputerChoice())){
    case "you lost, better luck next time!": 
        computerScore++;
        console.log(`the computer won that match! computer: ${computerScore} player:${playerScore} ties:${tiedRounds}`);
        break;
    case "you won, good job...Or was it just luck?": 
        playerScore++;
        console.log(`you won! player: ${playerScore} computer: ${computerScore}  ties: ${tiedRounds}`);
        break;
    case "you tied, try again!": 
        tiedRounds++;
        console.log(`you tied! player: ${playerScore} computer: ${computerScore}  ties: ${tiedRounds}`);
}
switch(oneMatch(getPlayerChoice() ,getComputerChoice())){
    case "you lost, better luck next time!": 
        computerScore++;
        console.log(`the computer won that match! computer: ${computerScore} player:${playerScore} ties:${tiedRounds}`);
        break;
    case "you won, good job...Or was it just luck?": 
        playerScore++;
        console.log(`you won! player: ${playerScore} computer: ${computerScore}  ties: ${tiedRounds}`);
        break;
    case "you tied, try again!": 
        tiedRounds++;
        console.log(`you tied! player: ${playerScore} computer: ${computerScore}  ties: ${tiedRounds}`);
}
switch(oneMatch(getPlayerChoice() ,getComputerChoice())){
    case "you lost, better luck next time!": 
        computerScore++;
        console.log(`the computer won that match! computer: ${computerScore} player:${playerScore} ties:${tiedRounds}`);
        break;
    case "you won, good job...Or was it just luck?": 
        playerScore++;
        console.log(`you won! player: ${playerScore} computer: ${computerScore}  ties: ${tiedRounds}`);
        break;
    case "you tied, try again!": 
        tiedRounds++;
        console.log(`you tied! player: ${playerScore} computer: ${computerScore}  ties: ${tiedRounds}`);
}
switch(oneMatch(getPlayerChoice() ,getComputerChoice())){
    case "you lost, better luck next time!": 
        computerScore++;
        console.log(`the computer won that match! computer: ${computerScore} player:${playerScore} ties:${tiedRounds}`);
        break;
    case "you won, good job...Or was it just luck?": 
        playerScore++;
        console.log(`you won! player: ${playerScore} computer: ${computerScore}  ties: ${tiedRounds}`);
        break;
    case "you tied, try again!": 
        tiedRounds++;
        console.log(`you tied! player: ${playerScore} computer: ${computerScore}  ties: ${tiedRounds}`);
}

if (computerScore < playerScore){
    return `you win, you had ${playerScore}, and your opponent had ${computerScore} with a total of ${tiedRounds} tied rounds.`
}else if (playerScore < computerScore){
    return `you lose, you had ${playerScore}, and your opponent had ${computerScore} with a total of ${tiedRounds} tied rounds.`
}else{
    return "you both tied this 5 game match"
}
}
console.log(game())