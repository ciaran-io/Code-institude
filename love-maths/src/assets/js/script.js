let buttons = document.querySelectorAll("button");

for (let button of buttons) {
  let gameType;

  button.addEventListener("click", () => {
    button.getAttribute("data-type") !== "submit"
      ? ((gameType = button.getAttribute("data-type")),
        alert(`You clicked ${gameType}`))
      : alert("You clicked submit");
  });
}

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame() {
  // Creates two random numbers between 1 and 25
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer() {}

function calculateScore() {}

function incrementScore() {}

function incrementWrongAnswer() {}

function displayAdditionQuestion() {}

function displaySubtractionQuestion() {}

function displayMultiplyQuestion() {}

function displayDivisionQuestion() {}
