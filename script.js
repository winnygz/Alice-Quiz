//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var aliceScore = 0;
var theredqueenScore = 0;
var thewhitequeenScore = 0;
var madhatterScore = 0;
var result = document.getElementById("result");

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", theredqueen);
q1a2.addEventListener("click", madhatter);
q1a3.addEventListener("click", thewhitequeen);
q1a4.addEventListener("click", alice);

q2a1.addEventListener("click", madhatter);
q2a2.addEventListener("click", theredqueen);
q2a3.addEventListener("click", thewhitequeen);
q2a4.addEventListener("click", alice);

q3a1.addEventListener("click", thewhitequeen);
q3a2.addEventListener("click", theredqueen);
q3a3.addEventListener("click", madhatter);
q3a4.addEventListener("click", alice);

q4a1.addEventListener("click", madhatter);
q4a2.addEventListener("click", thewhitequeen);
q4a3.addEventListener("click", theredqueen);
q4a4.addEventListener("click", alice);

q5a1.addEventListener("click", alice);
q5a2.addEventListener("click", madhatter);
q5a3.addEventListener("click", thewhitequeen);
q5a4.addEventListener("click", theredqueen);

//#TODO: Define quiz functions here
function alice() {
  aliceScore += 1;
  questionCount += 1;
  if (questionCount >= 5) {
    updateResult();
  }
}

function theredqueen() {
  theredqueenScore += 1;
  questionCount += 1;
  if (questionCount >= 5) {
    updateResult();
  }
}

function thewhitequeen() {
  thewhitequeenScore += 1;
  questionCount += 1;
  if (questionCount >= 5) {
    updateResult();
  }
}

function madhatter() {
  madhatterScore += 1;
  questionCount += 1;
  if (questionCount >= 5) {
    updateResult();
  }
}

function updateResult() {
  if (aliceScore >= 3) {
    result.innerHTML = "Alice!";
  } else if (theredqueenScore >= 3) {
    result.innerHTML = "The Red Queen!";
  } else if (thewhitequeenScore >= 3) {
    result.innerHTML = "The White Queen!";
  } else if (madhatterScore >= 3) {
    result.innerHTML = "The Mad Hatter!";
  } else {
    result.innerHTML = "Mix!";
  }
}
