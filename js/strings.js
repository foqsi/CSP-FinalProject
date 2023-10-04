const mysteryWords = ["cat", "dog", "bird", "alligator",
    "snake", "pig", "fox", "wolf", "lion", "cheetah",];

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

let secretWord, secretWordArray, displayedWord;
let guesses = 0;

function resetGame() {
    const randomIndex = getRandomIndex(mysteryWords.length);
    secretWord = mysteryWords[randomIndex];
    secretWordArray = secretWord.split('');
    displayedWord = new Array(secretWord.length).fill('*').join('');
    document.getElementById("displayWord").textContent = displayedWord;
}

resetGame();

document.getElementById("guessForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const guess = document.getElementById("guess").value.toLowerCase();

    if (guess === "") {
        alert("Please enter a letter");
        return;
    } else {
        guesses++;
    }

    document.getElementById("guess").value = "";

    let updatedDisplay = "";
    for (let i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === guess) {
            updatedDisplay += guess;
        } else {
            updatedDisplay += displayedWord[i];
        }
    }

    displayedWord = updatedDisplay;
    document.getElementById("displayWord").textContent = displayedWord;

    if (displayedWord === secretWord) {
        alert(`You guessed the word '${secretWord}' in ${guesses} guesses!`);
        guesses = 0;
        resetGame();
    }
});