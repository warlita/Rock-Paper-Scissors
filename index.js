
// defining the element ID's

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultDiv = document.getElementById("result");

//computer choice function
function compChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}
//human choice = event listeners
rockButton.addEventListener("click", () => {
    let human = "Rock";
    const computer = compChoice();
    game(human, computer);
});

paperButton.addEventListener("click", () => {
    let human = "Paper";
    const computer = compChoice();
    game(human, computer);
});

scissorsButton.addEventListener("click", () => {
    let human = "Scissors";
    const computer = compChoice();
    game(human, computer);
});

//game functionality
function game(humanChoice, compChoice) {
    if (humanChoice === compChoice) {
        resultDiv.textContent = 'It\'s a draw!';
    } else if (
        (humanChoice === 'Rock' && compChoice === 'Scissors') ||
        (humanChoice === 'Paper' && compChoice === 'Rock') ||
        (humanChoice === 'Scissors' && compChoice === 'Paper')
    ) {
        resultDiv.textContent = "You win!";
    } else {
        resultDiv.textContent = "Computer won. Try again.";
    }

};








