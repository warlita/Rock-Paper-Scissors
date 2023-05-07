const getUserChoice = userInput => {
	userInput = userInput.toLowerCase();
	if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
	return userInput;
	} else {
		console.log('Error, not a valid entry');
		}
	};
	
	const getComputerChoice = () => {
	 const randomNumber = Math.floor(Math.random() * 3);
		switch (randomNumber) {
		case 0:
			return 'rock';
			break;
		case 1:
			return 'paper';
			break;
		case 2:
			return 'scissors';
		}
	};
	
	const determineWinner = (userChoice, computerChoice) => {
		if (userChoice === computerChoice){
			return "it is a tie!";
		}
	
		if (userChoice === 'rock') {
			if (computerChoice === 'paper') {
				return "Sorry, computer won!";
			} else {
				return "Congratulations, you won!";
			}
		}
	
		if (userChoice === 'paper') {
			if(computerChoice === 'scissors') {
				return "Computer wins!";
			} else {
				return "Congratulations, you won!";
			}
		}
	
		if (userChoice === 'scissors') {
			if (computerChoice === 'rock') {
				return "Computer Won!";
			} else {
				return "You won!";
			}
		}
	
		if (userChoice === 'bomb') {
			return "You win no matter what!";
		} 
	};
	
	const playGame = () => {
		const userChoice = getUserChoice('bomb');
		const computerChoice = getComputerChoice();
		console.log('You threw: ' + userChoice);
		console.log('Computer threw ' + computerChoice);
		console.log(determineWinner(userChoice, computerChoice));
	};
	
	playGame();