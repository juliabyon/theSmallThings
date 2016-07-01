var playGame = function(){
var userScore = 0;
var computerScore = 0;
var winner = true;
//Checks for if correct user input
/*var rightChoice = function(userChoice) {
	if (userChoice == 'rock' || userChoice == 'scissors' || userChoice == 'paper') {
		return 0;
	} else if (userChoice == 'scissors') {
		return 0;
	} else if (userChoice == 'paper') {
		return 0;
	} else{
		return 'not a valid choice'
	}
}
*/

//Assigns numerical values to computer move
var userChoice = prompt("Do you choose rock, paper, scissors, lizard, or Spock?");
	if (userChoice != 'rock' && userChoice != 'scissors' && userChoice != 'paper' && userChoice != 'lizard' && userChoice != 'Spock')
		return 0;

var computerChoice = Math.random();
if (computerChoice < 0.21) {
	computerChoice = "rock";
} else if(computerChoice < 0.41) {
	computerChoice = "paper";
} else if(computerChoice < 0.61){
	computerChoice = "scissors";
} else if(computerChoice < 0.81){
	computerChoice = "lizard";
}else {
	computerChoice = "Spock";
}
//tracks the number of wins
/*var overallWinner = function (winner, userScore, computerScore){
	if (winner == false){
		computerScore += 1;
		return 0;
	}else{
		userScore += 1;
		return 0;
	}
}
*/
var compare = function (choice1, choice2) {
    if (choice1 == choice2){
        return 'The result is a tie!';
    }
    else if (choice1 == 'rock'){
        if (choice2 == 'scissors' || choice2 == 'lizard'){
            return 'rock wins';
        }else {
        	winner = false;
            return choice2 + ' wins';
        }
    }
    else if (choice1 == 'paper'){
        if (choice2 == 'rock' || choice2 == 'Spock'){
            return 'paper wins';
        } else {
        	winner = false;
            return choice2 + ' win(s)';
        }
    }
    else if (choice1 == 'scissors'){
        if (choice2 == 'paper' || choice2 == 'lizard'){
            return 'scissors wins';
        } else {
        	winner = false;
            return choice2 + ' wins';
        }
    }
    else if (choice1 == 'lizard') {
    	if (choice2 == 'Spock' || choice2 == 'paper'){
    		return 'lizard wins';
    	}else {
    		winner = false;
    		return choice2 + ' win(s)';
    	}
    }else {
    	if (choice2 == 'rock' || choice2 == 'scissors'){
    		return 'Spock wins';
    	}else {
    		winner = false
    		return choice2 + ' wins';
    	}
    } 
    //overallWinner(winner, userScore, computerScore);
};



return compare(userChoice, computerChoice);
};


