const buttons = document.querySelectorAll("button");
const questionArea = document.getElementById("question-area");

for (let button of buttons) {
  let gameType;

  button.addEventListener("click", () => {
    if (button.getAttribute("data-type") !== "submit") {
      gameType = button.getAttribute("data-type");
      runGame(gameType);
    } else {
      // If submit button is clicked check users answer
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
  let isCorrect = userAnswer === calculateAnswer;

  isCorrect
    ? (alert("Hey your'e answer is correct"), incrementScore())
    : (alert(`You answered incorrectly. Please try again`),
      incrementWrongAnswer());

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

  switch (operator) {
    case "+":
      return operand1 + operand2;
    case "-":
      return operand1 - operand2;
    case "*":
      return operand1 * operand2;
    case "/":
      return Math.floor(operand1 / operand2);
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
  questionArea.children[0].textContent = operand1;
  questionArea.children[2].textContent = operand2;
  questionArea.children[1].textContent = "+";
}

function displaySubtractionQuestion(operand1, operand2) {
  questionArea.children[0].textContent =
    operand1 > operand2 ? operand1 : operand2;
  questionArea.children[2].textContent =
    operand1 > operand2 ? operand2 : operand1;
  questionArea.children[1].textContent = "-";
}

function displayMultiplyQuestion(operand1, operand2) {
  questionArea.children[0].textContent = operand1;
  questionArea.children[2].textContent = operand2;
  questionArea.children[1].textContent = "x";
}

function displayDivisionQuestion(operand1, operand2) {
  questionArea.children[0].textContent =
    operand1 > operand2 ? operand1 : operand2;
  questionArea.children[2].textContent =
    operand1 > operand2 ? operand2 : operand1;
  questionArea.children[1].textContent = "/";
}
