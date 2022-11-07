
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
function playRound(y, x) {
     y = (playerSelection ()).toLowerCase();
     x = (getComputerChoice()).toLowerCase();
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
        
        return "You Lose!" + " " + x.charAt(0).toUpperCase() + x.slice(1) + " beats " + y.charAt(0).toUpperCase() + y.slice(1) + ".";
    }
    else if (((y === "paper") && (x === "rock")) 
    || 
    ((y === "scissors") && (x === "paper")) 
    || ((y === "rock") && (x === "scissors"))) {
        y.charAt(0) + y.split(1);
        return "You Win!" + " " + y.charAt(0).toUpperCase() + y.slice(1) + " beats " + x.charAt(0).toUpperCase() + x.slice(1) + "."; 
    }

    else {
        return "Ah oh no! You entered something wrong. Let's call this a loss!"
    }
}
    function game() {
        for (let i = 0; i <=5; i++){
            switch (i) {
                case 0:
                    a = playRound();
                    console.log (a)
                break;

                case 1:
                    b = playRound();
                    console.log(b);
                    break;
                case 2:
                    c = playRound();
                    console.log(c);
                    break;
                case 3:
                    d = playRound();
                    console.log(d);
                    break;
                case 4:
                    e = playRound();
                    console.log(e);
                break;

            }
            }
            return "Round 1 results: " + a + 
            " Round 2 results: " + b +
            " Round 1 results: " + c +
            " Round 1 results: " + d + 
            " Round 1 results: " + e;
        }
   
    
