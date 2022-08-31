let buttons = document.querySelectorAll("button");

for (let button of buttons) {
  let gameType;

  button.addEventListener("click", () => {
    button.getAttribute("data-type") !== "submit"
      ? ((gameType = button.getAttribute("data-type")), runGame(gameType))
      : alert("You clicked submit");
  });
}

// Start game with addition
runGame("addition");

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {
  // Creates two random numbers between 1 and 25
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;

  if (gameType === "addition") {
    displayAdditionQuestion(num1, num2);
  } else {
    alert(`Unknown game type: ${gameType}`);
    throw Error(`Unknown game type: ${gameType}. Aborting!`);
  }
}

function checkAnswer() {}

function calculateScore() {}

function incrementScore() {}

function incrementWrongAnswer() {}

function displayAdditionQuestion(operand1, operand2) {
  let questionArea = document.getElementById("question-area");
  questionArea.children[0].textContent = operand1;
  questionArea.children[1].textContent = "+";
  questionArea.children[2].textContent = operand2;
}

function displaySubtractionQuestion() {}

function displayMultiplyQuestion() {}

function displayDivisionQuestion() {}
