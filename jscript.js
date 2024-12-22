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

let score = 0;
let fullScore = ques.length;
let currQues = 0;
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

function updateQuestion() {
  span1.innerHTML = score + " / ";
  scoreDiv.appendChild(span1);

  span2.innerHTML = fullScore;
  span2.classList.add("text-red-500");
  scoreDiv.appendChild(span2);

  prog.setAttribute("value", currQues);
  prog.setAttribute("max", fullScore);
  prog.classList.add("w-full", "bg-green-500", "rounded-lg");
  questio.appendChild(prog);
  // show title of the question
  title.innerHTML = ques[currQues].question;
  title.classList.add("text-2xl", "font-bold", "mb-4", "text-neutral-700");
  questio.appendChild(title);
  // show the answers

  btnsDiv.setAttribute("id", "btns");
  btnsDiv.classList.add("grid", "gap-3");
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
    btn.addEventListener("click", function () {
      if (ans.correct) {
        score++;
        span1.innerHTML = score + " / ";
      }

      // disable all buttons after clicking one
      btnsDiv.querySelectorAll("button").forEach((button) => {
        button.disabled = true;
        if (button.innerHTML == ques[currQues].answer.find((a) => a.correct).text) {
          button.classList.add("bg-green-600");
          button.classList.remove("hover:bg-green-600");
        } else {
          button.classList.add("bg-red-500");
          button.classList.remove("hover:bg-green-600");
        }
      });

      if (ques[currQues] == ques[ques.length - 1]) {
        let finishBtn = document.createElement("button");
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
          if (score == fullScore) {
            questio.innerHTML = "";
            btnsDiv.innerHTML = "";
            let congDiv = document.createElement("div");
            let congH1 = document.createElement("h1");
            congH1.innerHTML =
              "Congratulations, you have won a free burger! 🤭🎉";
            congH1.classList.add(
              "text-yellow-800",
              "text-2xl",
              "font-bold",
              "mb-4"
            );
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
              score = 0;
              currQues = 0;
              questio.innerHTML = "";
              btnsDiv.innerHTML = "";
              updateQuestion();
            });
            congBtn.classList.add(
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
            congDiv.appendChild(congH1);
            congDiv.appendChild(congImg);
            congDiv.appendChild(congBtn);
            questio.appendChild(congDiv);
          } else {
            questio.innerHTML = "";
            btnsDiv.innerHTML = "";
            let loseDiv = document.createElement("div");
            let loseH1 = document.createElement("h1");
            loseH1.innerHTML = "OPS TRY AGAIN 😜";
            loseH1.classList.add(
              "text-yellow-800",
              "text-2xl",
              "font-bold",
              "mb-4"
            );
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
            let loseBtn = document.createElement("button");
            loseBtn.innerHTML = "PLAY AGAIN";
            loseBtn.addEventListener("click", function () {
              score = 0;
              currQues = 0;
              questio.innerHTML = "";
              btnsDiv.innerHTML = "";
              updateQuestion();
            });
            loseBtn.classList.add(
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
            loseDiv.appendChild(loseH1);
            loseDiv.appendChild(loseImg);
            loseDiv.appendChild(loseBtn);
            questio.appendChild(loseDiv);
          }
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

  questio.appendChild(btnsDiv);
}
function start() {
  // hide the start button
  startBtn.style.display = "none";
  // show the questions
  questio.style.display = "block";

  updateQuestion();

  body.style.cssText = "padding-top: 50px;";
  topdiv.style.cssText = "animation: fadeIn 1s forwards;";
}
