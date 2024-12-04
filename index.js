const wordToGuess = "ABRAKADABRA"; // The word for the game

const displayWord = Array(wordToGuess.length).fill("_"); // Create placeholders for the word

const revealedIndices = new Set(); // Track revealed letters

let interval = null;



const wordElement = document.getElementById("word");

const startButton = document.getElementById("startButton");

const pauseButton = document.getElementById("pauseButton");

const resumeButton = document.getElementById("resumeButton");



function startRevealing() {

  interval = setInterval(function () {

    if (revealedIndices.size === wordToGuess.length) {

      clearInterval(interval); // Stop if all letters are revealed

      return;

    }



    let randomIndex;

    do {

      randomIndex = Math.floor(Math.random() * wordToGuess.length);

    } while (revealedIndices.has(randomIndex)); // Ensure we pick a new letter



    revealedIndices.add(randomIndex);

    displayWord[randomIndex] = wordToGuess[randomIndex];

    wordElement.textContent = displayWord.join(" ");

  }, 3000);

}



startButton.addEventListener("click", function () {

  startButton.disabled = true; // Disable start button

  pauseButton.disabled = false;

  startRevealing();

});



pauseButton.addEventListener("click", function () {

  clearInterval(interval); // Pause revealing

  pauseButton.disabled = true;

  resumeButton.disabled = false;

});



resumeButton.addEventListener("click", function () {

  pauseButton.disabled = false;

  resumeButton.disabled = true;

  startRevealing(); // Resume revealing

});



wordElement.textContent = displayWord.join(" "); // Initialize the word display