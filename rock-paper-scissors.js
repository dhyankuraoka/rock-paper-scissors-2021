function computerPlay() {
			let selectRandomNumber = Math.floor(Math.random()*3) //this selct a number between 0, 1 and 2
			
			if (selectRandomNumber==0) {
				return ('rock');
			}

			else if (selectRandomNumber==1) {
				return ('paper');
			}

			else if (selectRandomNumber==2) {
				return ('scissors');
			}
		} //takes de computer play

function playerPlay() {
	let playerSelection = prompt('select your play! (among rock, paper or scissors):'); //here we ask for a player to select a play

	playerSelection = playerSelection.toLowerCase(); // this make sure that the play choosed ir not case sensitive

	if (playerSelection !='rock' && playerSelection!='paper' && playerSelection !='scissors') {
		return (alert('this play is not allowed'));
	}

	else {
		return playerSelection;
	}


		} //takes player selected play

function playRound(playerSelection, computerSelection) {

	round++;

	if 	(playerSelection == 'rock'){
		if (computerSelection=='rock') {
			return ('computer selected Rock, we have a draw!');
		}

		else if (computerSelection == 'paper') {
			computerScore++;
			return ('computer selected Paper, you lose! Paper beats Rock');
		}

		else if (computerSelection == 'scissors') {
			playerScore++;
			return ('computer selected Scissore, you win! Rock beats Scissors');
		}
	}

	else if (playerSelection == 'paper'){
		if (computerSelection=='rock') {
			playerScore++;
			return ('computer selected Rock, you win! Paper beats Rock');
		}

		else if (computerSelection == 'paper') {
			return ('computer selected Paper, we have a draw!');
		}

		else if (computerSelection == 'scissors') {
			computerScore++;
			return ('computer selected Scissore, you lose! Scissors beats Paper');
		}

	}

	else if (playerSelection == 'scissors'){
		if (computerSelection=='rock') {
			computerScore++;
			return ('computer selected Rock, you lose! Rock beats scissors');
		}

		else if (computerSelection == 'paper') {
			playerScore++;
			return ('computer selected Paper, you win! Scissors beats Paper');
		}

		else if (computerSelection == 'scissors') {
			return ('computer selected Paper, we have a draw!');
		}
	}	
} //iterate one game round

function game(){
	let playerScore = 0;
	let computerScore = 0;

	for(round = 1; round <=3; round++ ){

		let playerSelection = playerPlay ();
		let computerSelection = computerPlay();

		let roundResult = playRound(playerSelection, computerSelection);


		if(roundResult.indexOf('win') > 0){
			playerScore++;

		}
		else if (roundResult.indexOf('lose') > 0){
			computerScore++;

		}

		console.log(roundResult);

	}

	if (playerScore > computerScore) {
		alert(`You won! ${playerScore} x ${computerScore}`)
	}

	else if (playerScore < computerScore) {
		alert(`You lost! ${playerScore} x ${computerScore}`)
	}

	else if (playerScore == computerScore) {
		alert(`We have a draw! ${playerScore} x ${computerScore}`)
	}
}


function showFinalResult() {
	if (playerScore > computerScore) {
		return `You won! ${playerScore} x ${computerScore}`
		}

	else if (playerScore < computerScore) {
		return `You lost! ${playerScore} x ${computerScore}`
	}

	else if (playerScore == computerScore) {
		return `We have a draw! ${playerScore} x ${computerScore}`
	}
}

let playerScore = 0;
let computerScore = 0;
let round = 0;





const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', () =>{

	computerChoice = computerPlay();
	const para = document.createElement('p');
	const gameScore = document.querySelector('#gameScore');
	para.textContent = playRound('paper', computerChoice);
	gameScore.appendChild(para);
	
	if(round == 5) {
		const paraFinal = document.createElement('p');
		paraFinal.textContent = showFinalResult();
		gameScore.appendChild(paraFinal);

		playerScore = 0;
		computerScore = 0;
		round = 0;
	}
}
);	



const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', () =>{

	computerChoice = computerPlay();
	const para = document.createElement('p');
	const gameScore = document.querySelector('#gameScore');
	para.textContent = playRound('rock', computerChoice);
	gameScore.appendChild(para);
	
	if(round == 5) {
		const paraFinal = document.createElement('p');
		paraFinal.textContent = showFinalResult();
		gameScore.appendChild(paraFinal);

		playerScore = 0;
		computerScore = 0;
		round = 0;
	}
}
);	

const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', () =>{

	computerChoice = computerPlay();
	const para = document.createElement('p');
	const gameScore = document.querySelector('#gameScore');
	para.textContent = playRound('rock', computerChoice);
	gameScore.appendChild(para);
	
	if(round == 5) {
		const paraFinal = document.createElement('p');
		paraFinal.textContent = showFinalResult();
		gameScore.appendChild(paraFinal);

		playerScore = 0;
		computerScore = 0;
		round = 0;
	}
}
);	