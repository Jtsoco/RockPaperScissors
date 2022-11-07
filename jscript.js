
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
    prompt ("Please enter Rock, Paper, or Scissors.");

}
function game() {
    let y = playerSelection();
    let x = getComputerChoice();
    if (y === x) {
        return "Tie!"
    }
    else if (((y = "Rock") && (x = "Paper")) 
    || 
    ((y = "Paper") && (x = "Scissors")) 
    || ((y = "Scissors") && (x = "Rock"))) {
        return "You Lose!"

        
    }
    else if (((x = "Rock") && (y = "Paper")) 
    || 
    ((x = "Paper") && (y = "Scissors")) 
    || ((x = "Scissors") && (y = "Rock")))  {
        return "Winner!"
    }
    else if (y = "gun") {
        return "You win! Cheater..."
    }
}