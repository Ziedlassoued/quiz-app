const correctAnswer = true;

const myHeading = document.querySelector("h1");
myHeading.textContent = "are you a robot?";

const myQuestion = document.querySelector("p");
myQuestion.textContent = "question two";

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

const AnswerYes = document.querySelector(".yes");
AnswerYes.onclick = function () {
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
};
