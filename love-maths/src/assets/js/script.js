const buttons = document.querySelectorAll("button");
const questionArea = document.getElementById("question-area");
const operandText1 = questionArea.children[0];
const operandText2 = questionArea.children[2];
const operandSymbol = questionArea.children[1];
const userInput = questionArea.children[4];
let gameType;

// Check answer if user presses enter key
userInput.addEventListener("keydown", (event) =>
  event.key === "Enter" ? checkAnswer() : null
);

/* 
Sets game type or checks answer
Highlight button icon
reset input
*/
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    setGameType(button);
    highlightActiveGame(event);
    userInput.value = ""; // Reset input
  });
});

/**
 * Sets game type using selected button attribute value.
 * Checks answer if button attribute is submit.
 */
function setGameType(button) {
  if (button.getAttribute("data-type") === "submit") {
    checkAnswer();
  } else {
    gameType = button.getAttribute("data-type");
    runGame(gameType);
  }
}

/**
 * Add class to button icon when clicked.
 * Remove all other button icons active class.
 */
function highlightActiveGame(event) {
  buttons.forEach((button) => {
    // If event.target is button toggle icon-active class
    if (button.children[0]) {
      button.classList[event.target === button ? "toggle" : "remove"](
        "icon-active"
      );
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
  userInput.focus();
  // Creates two random numbers between 1 and 25
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;

  switch (gameType) {
    case "addition":
      displayAdditionQuestion(num1, num2);
      break;
    case "subtract":
      displaySubtractionQuestion(num1, num2);
      break;
    case "multiply":
      displayMultiplyQuestion(num1, num2);
      break;
    case "division":
      displayDivisionQuestion(num1, num2);
      break;
    default:
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

  if (isCorrect) {
    alert("Hey your'e answer is correct");
    incrementScore();
    userInput.value = "";
    runGame(calculateAnswer[1]);
  } else {
    alert(`You answered incorrectly. Please try again`);
    incrementWrongAnswer();
  }
}

/**
 * Get the operands (numbers) & operator (+, -, etc)
 * from DOM, and returns correct answer
 */
function calculateCorrectAnswer() {
  let operand1 = parseInt(questionArea.children[0].textContent);
  let operand2 = parseInt(questionArea.children[2].textContent);
  let operator = questionArea.children[1].textContent;

  switch (operator) {
    case "+":
      return [operand1 + operand2, "addition"];
    case "-":
      return [operand1 - operand2, "subtract"];
    case "*":
      return [operand1 * operand2, "multiply"];
    case "/":
      return [operand1 / operand2, "division"];
    default:
      alert(`Unknown game type: ${gameType}`);
      throw Error(`Unknown game type: ${gameType}. Aborting!`);
  }
}

/**
 * Get the current score
 * from DOM, and increases score by 1
 */
function incrementScore() {
  let correctAnswersText = parseInt(
    document.getElementById("score").textContent
  );
  document.getElementById("score").textContent = ++correctAnswersText;
}

/**
 * Get the current score
 * from DOM, and decreases score by 1
 */
function incrementWrongAnswer() {
  let decrementScore = parseInt(
    document.getElementById("incorrect").textContent
  );
  document.getElementById("incorrect").textContent = ++decrementScore;
}

function displayAdditionQuestion(operand1, operand2) {
  operandText1.textContent = operand1;
  operandText2.textContent = operand2;
  operandSymbol.textContent = "+";
}

function displaySubtractionQuestion(operand1, operand2) {
  operandText1.textContent = operand1 > operand2 ? operand1 : operand2;
  operandText2.textContent = operand1 > operand2 ? operand2 : operand1;
  operandSymbol.textContent = "-";
}

function displayMultiplyQuestion(operand1, operand2) {
  operandText1.textContent = operand1;
  operandText2.textContent = operand2;
  operandSymbol.textContent = "x";
}

function displayDivisionQuestion(operand1, operand2) {
  operandText1.textContent = operand1 * operand2;
  operandText2.textContent = operand2;
  operandSymbol.textContent = "/";
}
