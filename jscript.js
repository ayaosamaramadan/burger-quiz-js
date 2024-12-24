// data
const ques = [
  {
    question: "What is the main ingredient in a classic hamburger?",
    answer: [
      { text: "Beef", correct: true },
      { text: "Chicken", correct: false },
      { text: "Pork", correct: false },
      { text: "Turkey", correct: false },
    ],
  },
  {
    question: "Which of these is a common topping on a hamburger?",
    answer: [
      { text: "Lettuce", correct: false },
      { text: "Tomato", correct: false },
      { text: "Onion", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
  {
    question: "What type of bun is typically used for a hamburger?",
    answer: [
      { text: "Brioche", correct: false },
      { text: "Sesame Seed", correct: true },
      { text: "Whole Wheat", correct: false },
      { text: "Potato", correct: false },
    ],
  },
  {
    question: "Which of these is a popular cheese choice for a cheeseburger?",
    answer: [
      { text: "American", correct: false },
      { text: "Cheddar", correct: false },
      { text: "Swiss", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
  {
    question: "What is a common condiment for a hamburger?",
    answer: [
      { text: "Ketchup", correct: false },
      { text: "Mustard", correct: false },
      { text: "Mayonnaise", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
];

// variables
let startBtn = document.getElementById("start");
let questio = document.getElementById("ques");
let scoreDiv = document.getElementById("score");
let span1 = document.createElement("span");
let title = document.createElement("h1");
let span2 = document.createElement("span");
let btnsDiv = document.createElement("div");
let body = document.querySelector("body");
let topdiv = document.getElementById("topdiv");
let prog = document.createElement("progress");
let timerP = document.createElement("p");
let finishBtn = document.createElement("button");
let timer = 46;
let currQues = 0;
let score = 0;
let interval;
let fullScore = ques.length;

function massageStyle(element) {
  element.classList.add(
    "bg-green-500",
    "hover:bg-green-600",
    "text-white",
    "font-bold",
    "py-2",
    "px-4",
    "rounded",
    "transition",
    "duration-300",
    "ease-in-out",
    "transform",
    "hover:scale-105",
    "mt-4"
  );
}

function start() {
  // hide the start button
  startBtn.style.display = "none";
  // show the questions
  questio.style.display = "block";

  // update the questions
  updateQuestion();

  //  add some styles
  body.style.cssText = "padding-top: 50px;";
  topdiv.style.cssText = "animation: fadeIn 1s forwards;";
}

function updateQuestion() {
  // show the score
  showScore();

  // show the timer
  showTimer();

  // progress bar
  showProg();

  // show title of the question
  showTitle();

  // show the answers
  showAnswers();
}

function showTimer() {
  // show the timer
  if (interval) {
    clearInterval(interval);
  }

  // set the timer
  interval = setInterval(function () {
    timer--;
    if (timer <= 0) {
      clearInterval(interval);
      handleFinish();
      timerP.innerHTML = "Time's up!";
    } else {
      timerP.innerHTML = `⏰ : ${timer}`;
    }
    timerP.classList.add(
      "text-[20px]",
      "font-bold",
      "mb-4",
      "text-neutral-700"
    );
  }, 1000);

  // add the timer to the question
  questio.insertBefore(timerP, questio.firstChild);
}

function showScore() {
  //  set the score
  span1.innerHTML = score + " / ";
  scoreDiv.appendChild(span1);
  span2.innerHTML = fullScore;
  span2.classList.add("text-red-500");

  // add the score to the question
  scoreDiv.appendChild(span2);
}

function showProg() {
  // set the progress bar
  prog.setAttribute("value", currQues);
  prog.setAttribute("max", fullScore);
  prog.classList.add("w-full", "bg-green-500", "rounded-lg");

  // add the progress bar to the question
  questio.appendChild(prog);
}

function showTitle() {
  // set the title of the question
  title.innerHTML = ques[currQues].question;
  title.classList.add("text-2xl", "font-bold", "mb-4", "text-neutral-700");

  // add the title to the question
  questio.appendChild(title);
}

function showAnswers() {
  // create a div for the buttons
  btnsDiv.setAttribute("id", "btns");
  btnsDiv.classList.add("grid", "gap-3");

  // loop through the answers
  ques[currQues].answer.forEach((ans) => {
    let btn = document.createElement("button");
    btn.innerHTML = ans.text;
    btn.classList.add(
      "bg-green-500",
      "hover:bg-green-600",
      "text-white",
      "font-bold",
      "py-2",
      "px-4",
      "rounded",
      "transition",
      "duration-300",
      "ease-in-out",
      "transform",
      "hover:scale-105"
    );
    // check if the answer is correct
    btn.addEventListener("click", function () {
      if (ans.correct) {
        score++;
        span1.innerHTML = score + " / ";
      }

      // disable all buttons after clicking one
      btnsDiv.querySelectorAll("button").forEach((button) => {
        button.disabled = true;
        if (
          button.innerHTML == ques[currQues].answer.find((a) => a.correct).text
        ) {
          button.classList.add("bg-green-600");
          button.classList.remove("hover:bg-green-600");
        } else {
          button.classList.add("bg-red-500");
          button.classList.remove("hover:bg-green-600");
        }
      });

      // show the next or finish button
      if (ques[currQues] == ques[ques.length - 1]) {
        finishBtn.innerHTML = "Finish";
        finishBtn.classList.add(
          "bg-red-500",
          "hover:bg-green-600",
          "text-white",
          "font-bold",
          "py-2",
          "px-4",
          "rounded",
          "transition",
          "duration-300",
          "ease-in-out",
          "transform",
          "hover:scale-105",
          "mt-4"
        );
        finishBtn.addEventListener("click", function () {
          handleFinish();
        });
        questio.appendChild(finishBtn);
      } else {
        let nextBtn = document.createElement("button");
        nextBtn.innerHTML = "Next";
        nextBtn.classList.add(
          "bg-blue-600",
          "hover:bg-blue-700",
          "text-white",
          "font-bold",
          "py-2",
          "px-4",
          "rounded",
          "transition",
          "duration-300",
          "ease-in-out",
          "transform",
          "hover:scale-105",
          "mt-4"
        );
        nextBtn.addEventListener("click", function () {
          currQues++;
          if (currQues < ques.length) {
            questio.innerHTML = "";
            btnsDiv.innerHTML = "";
            updateQuestion();
          }
        });
        questio.appendChild(nextBtn);
      }
    });
    btnsDiv.appendChild(btn);
  });

  // add the buttons to the question
  questio.appendChild(btnsDiv);
}

function playAgain() {
  score = 0;
  currQues = 0;
  timer = 46;
  questio.innerHTML = "";
  btnsDiv.innerHTML = "";
}

function congMassage() {
  let congDiv = document.createElement("div");
  let congH1 = document.createElement("h1");
  congH1.innerHTML = "Congratulations, you have won a free burger! 🤭🎉";
  congH1.classList.add("text-yellow-800", "text-2xl", "font-bold", "mb-4");
  let congImg = document.createElement("img");
  congImg.src = "./imgs/suc.gif";
  congImg.classList.add(
    "w-44",
    "h-44",
    "mx-auto",
    "rounded-full",
    "border-4",
    "border-yellow-800",
    "shadow-lg",
    "transform",
    "hover:scale-110",
    "transition",
    "duration-300",
    "ease-in-out"
  );
  let congBtn = document.createElement("button");
  congBtn.innerHTML = "PLAY AGAIN";
  congBtn.addEventListener("click", function () {
    playAgain();
    updateQuestion();
  });
  massageStyle(congBtn);

  congDiv.appendChild(congH1);
  congDiv.appendChild(congImg);
  congDiv.appendChild(congBtn);
  questio.appendChild(congDiv);
}

function loseMassage() {
  let loseDiv = document.createElement("div");
  let loseH1 = document.createElement("h1");
  loseH1.innerHTML = "OPS TRY AGAIN 😜";
  loseH1.classList.add("text-yellow-800", "text-2xl", "font-bold", "mb-4");
  let loseImg = document.createElement("img");
  loseImg.src = "./imgs/trAGAIN.gif";
  loseImg.classList.add(
    "w-44",
    "h-44",
    "mx-auto",
    "rounded-full",
    "border-4",
    "border-yellow-800",
    "shadow-lg",
    "transform",
    "hover:scale-110",
    "transition",
    "duration-300",
    "ease-in-out"
  );
  // add the play again button
  let loseBtn = document.createElement("button");
  loseBtn.innerHTML = "PLAY AGAIN";
  loseBtn.addEventListener("click", function () {
    playAgain();
    updateQuestion();
  });
  massageStyle(loseBtn);

  // add the elements to show
  loseDiv.appendChild(loseH1);
  loseDiv.appendChild(loseImg);
  loseDiv.appendChild(loseBtn);
  questio.appendChild(loseDiv);
}

function handleFinish() {
  if (interval) {
    clearInterval(interval);
  }

  // hide question and buttons
  questio.innerHTML = "";
  btnsDiv.innerHTML = "";

  // show the massage depends on the score
  if (score == fullScore) {
    congMassage();
  } else {
    loseMassage();
  }
}
