// Initialisation des variables
const choices = document.querySelectorAll('.choice');
const resultDiv = document.querySelector('#result');
const scoreDiv = document.querySelector('#score');
const resetButton = document.querySelector('#reset');

let playerScore = 0;
let computerScore = 0;

// Fonction pour générer le choix de l'ordinateur
function getComputerChoice() {
    const options = ["Pierre", "Feuille", "Ciseaux"];
    return options[Math.floor(Math.random() * options.length)];
}

// Fonction pour déterminer le gagnant
function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Égalité";
    } else if (
        (playerChoice === "Pierre" && computerChoice === "Ciseaux") ||
        (playerChoice === "Feuille" && computerChoice === "Pierre") ||
        (playerChoice === "Ciseaux" && computerChoice === "Feuille")
    ) {
        playerScore++;
        return "Vous gagnez";
    }else {
        computerScore++;
        return "L'ordinateur gagne";
    }
}

// Fonction pour jouer une manche
function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    resultDiv.innerHTML = `
        Vous : <strong>${playerChoice}</strong><br>
        Ordinateur : <strong>${computerChoice}</strong><br>
        <strong>${winner}</strong>
    `;
    updateScore();
}

// Fonction pour mettre à jour le score
function updateScore() {
    scoreDiv.textContent = `Score - Joueur: ${playerScore} | Ordinateur: ${computerScore}`;
}

// Fonction pour réinitialiser le jeu
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    resultDiv.textContent = "";
    updateScore();
}

// Ajout des événements sur les choix
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        playRound(choice.dataset.choice);
    });
});

// Réinitialisation du jeu
resetButton.addEventListener('click', resetGame);
