
function getComputerChoice() {
    let x = Math.floor((Math.random () * 100));
    if (x <= 33) {
        return "Rock"
    }
    else if ( x <= 66) {
        return "Paper"

    }
    else if (x <= 99) {
        return "Scissors"
    }
    else {
        return "Gun"
    }




}

function playerSelection () {
   let playerChoice = prompt ("Please enter Rock, Paper, or Scissors.");
   return (playerChoice);
}
function game() {
    let y = (playerSelection ()).toLowerCase();
    let x = (getComputerChoice()).toLowerCase();
    if ( x === y) {
        return "It's a tie!"
    }
    else if (y === "gun") {
        return "cheater..."
    }
    else if (((y === "rock") && (x === "paper")) 
    || 
    ((y === "paper") && (x === "scissors")) 
    || ((y === "scissors") && (x === "rock"))) {
        
        return "You Lose!" + " " + x.charAt(0).toUpperCase() + x.slice(1) + " beats " + y.charAt(0).toUpperCase() + y.slice(1);
    }
    else if (((y === "paper") && (x === "rock")) 
    || 
    ((y === "scissors") && (x === "paper")) 
    || ((y === "rock") && (x === "scissors"))) {
        y.charAt(0) + y.split(1);
        return "You Win!" + " " + y.charAt(0).toUpperCase() + y.slice(1) + "beats " + x.charAt(0).toUpperCase() + x.slice(1); 
    }

    else {
        return "Ah E gad"
    }

    

}

