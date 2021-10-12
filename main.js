const correctAnswer = true;
/*const myHeading = document.querySelector("h1");
myHeading.textContent = "are you a robot?";

const myQuestion = document.querySelector("p");
myQuestion.textContent = "question two";*/

/*document.querySelector(".yes").onclick = function () {
  if (correctAnswer === true) {
    alert(" Correct");
  } else {
    alert("False");
  }
};
document.querySelector(".no").onclick = function () {
  if (correctAnswer === true) {
    alert(" Flase");
  } else {
    alert("Correct");
  }*/

const yesButton = document.querySelector(".yes");
yesButton.onclick = function () {
  if (correctAnswer === true) {
    showAnswerIsCorrect();
  } else {
    const resultElement = document.createElement("p");
    resultElement.textContent = "that is not correct";
    resultElement.className = "incorrect";
    document.body.append(resultElement);
  }
};
const noButton = document.querySelector(".no");
noButton.onclick = function () {
  if (correctAnswer === false) {
    const resultElement = document.createElement("p");
    resultElement.textContent = "It is correct";
    resultElement.className = "correct";
    document.body.append(resultElement);
  } else {
    const resultElement = document.createElement("p");
    resultElement.textContent = "that is not correct";
    resultElement.className = "incorrect";
    document.body.append(resultElement);
  }
};
function showAnswerIsCorrect() {
  const resultElement = document.createElement("p");
  resultElement.textContent = "It is correct";
  resultElement.className = "correct";
  document.body.append(resultElement);
}
function disabledButtons() {
  yesButton.disabled = true;
  noButton.disabled = true;
}
/*}
  const newP = document.createElement("p");
  const newContent = document.createTextNode("The Answer is correct");
  newP.appendChild(newContent);
  const currentP = document.getElementById("answer");
  document.body.insertBefore(newP, currentP);
};

const AnswerNo = document.querySelector(".no");
AnswerNo.onclick = function () {
  const newP = document.createElement("p");
  const newContent = document.createTextNode("The Answer is wrong");
  newP.appendChild(newContent);
  const currentP = document.getElementById("answer");
  document.body.insertBefore(newP, currentP);
};*/
