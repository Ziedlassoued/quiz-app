const correctAnswer = true;

const myHeading = document.querySelector("h1");
myHeading.textContent = "are you a robot?";

const myQuestion = document.querySelector("p");
myQuestion.textContent = "question two";

document.querySelector(".yes").onclick = function () {
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
  }
};
