var player1 = 0; 
var player2 = 0; 

while(player1 < 3 && player2 <3){
	var toss1 = parseInt(Math.random()*10)%3; 
	var toss2 = parseInt(Math.random()*10)%3; 
	console.log("Player one threw "+printToss(toss1));
	console.log("Player two threw "+printToss(toss2));
	findWinner(toss1, toss2); 
}
if(player1 === 3){
	console.log("Player 1 Wins the game!");
} else {
	console.log("Player 2 wins the game!");
}

function findWinner(t1, t2){
	var win = mod((t1-t2), 3); 
	switch(win){
		case 0: console.log("It's a tie");
				break; 
		
		case 1: console.log("Player 1");
				player1++; 
				break; 
		
		case 2: console.log("Player 2");
				player2++;
				break; 
	}

}


function printToss(toss){

	switch(toss){
		case 0: return "rock"; 
				break; 

		case 1: return "paper";
				break; 

		case 2: return "scissors"
				break; 
	}

}

//https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
function mod(a, b){
	return ((a%b) + b) % b;  
} 