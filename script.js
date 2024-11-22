// Initialisation des variables
const choices = document.querySelectorAll('.choice');
const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');
const resetButton = document.getElementById('reset');

let playerScore = 0;
let computerScore = 0;

// Fonction pour générer le choix de l'ordinateur
function getComputerChoice() {
    const options = ["Pierre", "Feuille", "Ciseaux"];
    return options[Math.floor(Math.random() * options.length)];
}
