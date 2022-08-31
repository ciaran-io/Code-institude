let buttons = document.querySelectorAll("button");
const questionArea = document.getElementById("question-area");

for (let button of buttons) {
  let gameType;

  button.addEventListener("click", () => {
    if (button.getAttribute("data-type") !== "submit") {
      (gameType = button.getAttribute("data-type")), runGame(gameType);
    } else {
      checkAnswer();
    }
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

/**
 * Check user answer against the first returned
 * element in the calculateAnswer array
 */
function checkAnswer() {
  let userAnswer = parseInt(questionArea.children[4].value);
  let calculateAnswer = calculateCorrectAnswer();
  let isCorrect = userAnswer === calculateAnswer[0];

  isCorrect
    ? alert("Hey your'e answer is correct")
    : alert(`You answered incorrectly. Please try again`);

  // runGame(calculateAnswer[1]);
}

/**
 * Get the operands (numbers) & operator (+, -, etc)
 * from DOM, and returns correct answer
 */
function calculateCorrectAnswer() {
  let operand1 = parseInt(questionArea.children[0].textContent);
  let operand2 = parseInt(questionArea.children[2].textContent);
  let operator = questionArea.children[1].textContent;

  if (operator === "+") {
    return [operand1 + operand2, "addition"];
  } else {
    alert(`Unknown game type: ${gameType}`);
    throw Error(`Unknown game type: ${gameType}. Aborting!`);
  }
}

function incrementScore() {}

function incrementWrongAnswer() {}

function displayAdditionQuestion(operand1, operand2) {
  questionArea.children[0].textContent = operand1;
  questionArea.children[2].textContent = operand2;
  questionArea.children[1].textContent = "+";
}

function displaySubtractionQuestion() {}

function displayMultiplyQuestion() {}

function displayDivisionQuestion() {}
