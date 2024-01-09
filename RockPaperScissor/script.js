let humanScore = 0;
let computerScore = 0;
let gameCounter = 0;

function makeChoice(choice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById('computer-choice').textContent = `Computer chose: ${computerChoice}`;

    if (choice === computerChoice) {
        document.getElementById('result').textContent = "It's a tie!";
    } else if (
        (choice === 'rock' && computerChoice === 'scissors') ||
        (choice === 'paper' && computerChoice === 'rock') ||
        (choice === 'scissors' && computerChoice === 'paper')
    ) {
        document.getElementById('result').textContent = "You win!";
        humanScore++;
    } else {
        document.getElementById('result').textContent = "Computer wins!";
        computerScore++;
    }

    gameCounter++;
    document.getElementById('score').textContent = `Human: ${humanScore} - Computer: ${computerScore}`;
    document.getElementById('game-counter').textContent = `Game: ${gameCounter}`;
}