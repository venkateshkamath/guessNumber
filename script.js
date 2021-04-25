"use strict";
// console.log(document.querySelector(".message")); // This is picking up the tag
// // Picking up the content
// console.log(document.querySelector(".message").textContent);
// // DOM MANIPULATION
// document.querySelector(".message").textContent = "Correct number";

// Change the score and the ?
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
// //.value is to showcase and change the value of input
// document.querySelector(".guess").value = 21;

// console.log(document.querySelector('.guess').value);// The input field is accessed using the value and not the textContent

//addEventListener takes 2 args when to do and what to do?

/// Secret number generation  from 1 to 20
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = document.querySelector(".score").textContent;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //whatever inp we get from input or user it is string, so change it using Number()
  if (!guess) {
    // guess is empty in numbers equivalent falsey values
    // document.querySelector(".message").textContent = "Invalid input 🤷‍♂️";
    displayMessage("Invalid input 🤷‍♂️"); //ref 1
  }
  // REFACTORING
  else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high 📈" : "Too low 📉"); // one of the two exp will be evaluated, even paranthesis can evaluate
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      // document.querySelector(".message").textContent = "You lost 😢";
      displayMessage("You lost 😢");
    }
  }

  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too high 📈";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".score").textContent = 0;
  //     document.querySelector(".message").textContent = "You lost 😢";
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too low 📉";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".score").textContent = 0;
  //     document.querySelector(".message").textContent = "You lost 😢";
  //   }
  // }
  //You guess the number so styling should be done here
  else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "Correct Number😍";
    displayMessage("Correct Number😍");
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore; // click on again highscore remains unchanged
    }
    //styling
    document.querySelector(".number").style.width = "25rem"; // Write css in camelCase and the styling is accessed in .style and value in 'string'.
    document.querySelector("body").style.backgroundColor = "#60b347";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20; // already assigned so no need to change
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  //document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1); // secretNumber to generate new number
  document.querySelector(".guess").value = "";
});
