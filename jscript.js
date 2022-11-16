// this is the computer generated choice//
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
// player selection prompt is here//
function playerSelection () {
   let playerChoice = prompt ("Please enter Rock, Paper, or Scissors.");
   return (playerChoice);
}
//playing a single round of the game//
//hey future me, y and x are declared only in this function, not on a global scope. don't forget!//
function playRound(y, x) {
     y = (playerSelection ()).toLowerCase();
     x = (getComputerChoice()).toLowerCase();
    if ( x === y) {
        return "It's a tie!"
    }
    else if (y === "gun") {
        return "cheater... I guess you win."
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



//This is Javascript for image buttons


let playerChoice;
const rockImg = document.querySelector(".rockImg");
//document.querySelector('rockImg').addEventListener("click", ) 
rockImg.addEventListener('click', playerChoiceRock);

function playerChoiceRock(e) {console.log(e);
    let playerImgChoice = document.querySelector(".playerImgChoice"); 
    playerImgChoice.src = "images/rock.jpg";
    playerChoice = "rock";
    


};


const scissorsImg = document.querySelector(".scissorsImg");
//document.querySelector('rockImg').addEventListener("click", ) 
scissorsImg.addEventListener('click', playerChoiceScissors) 

function playerChoiceScissors (e) {console.log(e);
    
let playerImgChoice = document.querySelector(".playerImgChoice"); 
playerImgChoice.src = "images/scissors.png";
playerChoice = "scissors";
return

};

const paperImg = document.querySelector(".paperImg");
//document.querySelector('rockImg').addEventListener("click", ) 
paperImg.addEventListener('click', playerChoicePaper);

function playerChoicePaper(e) { console.log(e);
    let playerImgChoice = document.querySelector(".playerImgChoice"); 
playerImgChoice.src = "images/paper.jpg";
playerChoice = "paper"


}

//Running the game through the fight button
const run = document.querySelector(".run");
run.addEventListener('click', runGame);
let enemyImg = document.querySelector(".enemyImg")

results = document.getElementById("results");

function runGame(e) {
    runEnemy();
    //this next line puts the results into the results box
   
   
   fought = fightRound();

   fightRoundResults = scoreBoard();
   results.innerHTML = fought + "<br>" +fightRoundResults;

//results.innerHTML = fightRound() + \n + scoreBoard();

};



//clear the game with the clear button
const clearButton = document.querySelector(".clear");
clearButton.addEventListener('click', clearGame)
function clearGame() {
    let playerImgChoice = document.querySelector(".playerImgChoice"); 
    playerImgChoice.src = "images/questionMark.png";
    enemyImg.src = "images/questionMark.png";
    results.innerHTML = "";

}


//Runs the enemy selection and puts the image in enemy box
function runEnemy() {
    
 enemyAnswer = getComputerChoice();
if (enemyAnswer === "Rock") {
    enemyImg.src = "images/rock.jpg";
}
else if (enemyAnswer === "Paper") {
    enemyImg.src = "images/paper.jpg";

}

else if (enemyAnswer === "Scissors") {
    enemyImg.src = "images/scissors.png"
}
else {"Error"}

}

function fightRound (y, x) {
    y = (playerChoice).toLowerCase();
    x = (enemyAnswer).toLowerCase();
   if ( x === y) {
       return "It's a tie!"
   }
   else if (y === "gun") {
       return "cheater... I guess you win."
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
       return "Ah oh no! You didn't enter anything. Let's call this a loss!"
   }
}


//Next, make a looping function that uses the result of fightRound
//loop it with wins and losses, and round 1:
//keep track up to five games, then restart
i = 0,
wins = 0;
losses = 0
ties = 0;

function scoreBoard() {

   
    a = fought;
    if (i === 0) {
             
        
            if ((a.slice(0,7) === "You Win") || (a.slice(0,7) === "cheater")) {
                            wins ++;
                            i++;
                            
                        }
                        else if ((a.slice(0,8) === "You Lose") || (a.slice(0,2) === "Ah")) {
                            losses ++;
                            i++;
                            
                        }
                        else {
                            ties ++;
                            i++;
                        }
                        
                        return " Wins: " + wins + " Ties: " + ties + " Losses: " + losses;
    }

    else if (i === 1) {
       
       if ((a.slice(0,7) === "You Win") || (a.slice(0,7) === "cheater")) {
                       wins ++;
                       i++;
                   }
                   else if ((a.slice(0,8) === "You Lose") || (a.slice(0,2) === "Ah")) {
                       losses ++;
                       i++;
                   }
                   else {
                       ties ++;
                       i++;
                   }
                  
                   return " Wins: " + wins + " Ties: " + ties + " Losses: " + losses;
}

    if (i === 2) {
    
        if ((a.slice(0,7) === "You Win") || (a.slice(0,7) === "cheater")) {
                   wins ++;
                   i++;
               }
               else if ((a.slice(0,8) === "You Lose") || (a.slice(0,2) === "Ah")) {
                   losses ++;
                   i++;
               }
               else {
                   ties ++;
                   i++;
               }
               
               return " Wins: " + wins + " Ties: " + ties + " Losses: " + losses;
}

    if (i === 3) {
    
        if ((a.slice(0,7) === "You Win") || (a.slice(0,7) === "cheater")) {
                   wins ++;
                   i++;
               }
               else if ((a.slice(0,8) === "You Lose") || (a.slice(0,2) === "Ah")) {
                   losses ++;
                   i++;
               }
               else {
                   ties ++;
                   i++;
               }
               
               return " Wins: " + wins + " Ties: " + ties + " Losses: " + losses;
}

    if (i === 4) {
    
        if ((a.slice(0,7) === "You Win") || (a.slice(0,7) === "cheater")) {
                   wins ++;
                   i++;
               }
               else if ((a.slice(0,8) === "You Lose") || (a.slice(0,2) === "Ah")) {
                   losses ++;
                   i++;
               }
               else {
                   ties ++;
                   i++;
               }
               if (wins > losses) {
                winMessage = "You're the winner!"
            }
            else if (wins < losses) {
                winMessage = "You're the loser..."
            }
            else {
                winMessage = "It's a tie! Good try!"
            }

            return "Total Results: " + winMessage + "<br>Wins: " + wins + " Ties: " + ties + " Losses: " + losses;





              
    }
    else if (i === 5) {
        i = 0;
        wins = 0;
        losses = 0;
        ties = 0;
        if ((a.slice(0,7) === "You Win") || (a.slice(0,7) === "cheater")) {
            wins ++;
            i++;
            
        }
        else if ((a.slice(0,8) === "You Lose") || (a.slice(0,2) === "Ah")) {
            losses ++;
            i++;
            
        }
        else {
            ties ++;
            i++;
        }
        
        return " Wins: " + wins + " Ties: " + ties + " Losses: " + losses;
    }
}


















//this is the game//
    function game() {
        let wins = 0;
        let losses = 0;
        let ties = 0;

        for (let i = 0; i <=5; i++){
            //using switch case for easier if/else on the main 5 rounds. Each round's results will be represented by an alphabet letter// 
            switch (i) {
                case 0:
                    a = playRound();
                    alert (a);
                    if ((a.slice(0,7) === "You Win") || (a.slice(0,7) === "cheater")) {
                        wins ++;
                    }
                    else if ((a.slice(0,8) === "You Lose") || (a.slice(0,2) === "Ah")) {
                        losses ++;
                    }
                    else {
                        ties ++;
                    }
                break;

                case 1:
                    b = playRound();
                    alert(b);
                    if ((b.slice(0,7) === "You Win") || (b.slice(0,7) === "cheater")) {
                        wins ++;
                    }
                    else if ((b.slice(0,8) === "You Lose") || (b.slice(0,2) === "Ah")) {
                        losses ++;
                    }
                    else {
                        ties ++;
                    }
                    break;
                case 2:
                    c = playRound();
                    alert(c);
                    if ((c.slice(0,7) === "You Win") || (c.slice(0,7) === "cheater")) {
                        wins ++;
                    }
                    else if ((c.slice(0,8) === "You Lose") || (c.slice(0,2) === "Ah")) {
                        losses ++;
                    }
                    else {
                        ties ++;
                    }
                    break;
                case 3:
                    d = playRound();
                    alert(d);
                    if ((d.slice(0,7) === "You Win") || (d.slice(0,7) === "cheater")) {
                        wins ++;
                    }
                    else if ((d.slice(0,8) === "You Lose") || (d.slice(0,2) === "Ah")) {
                        losses ++;
                    }
                    else {
                        ties ++;
                    }
                    break;
                case 4:
                    e = playRound();
                    alert(e);
                    if ((e.slice(0,7) === "You Win") || (e.slice(0,7) === "cheater")) {
                        wins ++;
                    }
                    else if ((e.slice(0,8) === "You Lose") || (e.slice(0,2) === "Ah")) {
                        losses ++;
                    }
                    else {
                        ties ++;
                    }
                break;

            }
            }
            if (wins > losses) {
                winMessage = "You're the winner!"
            }
            else if (wins < losses) {
                winMessage = "You're the loser..."
            }
            else {
                winMessage = "It's a tie! Good try!"
            }
            //this is ugly, but it works okay//
            let results = "Round 1 results: " + a + 
            " Round 2 results: " + b +
            " Round 3 results: " + c +
            " Round 4 results: " + d + 
            " Round 5 results: " + e + " Total Results: " + winMessage + " Wins: " + wins + " Ties: " + ties + " Losses: " + losses;
            alert(results);
        }
   
    
