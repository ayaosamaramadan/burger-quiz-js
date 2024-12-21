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
      { text: "Lettuce", correct: true },
      { text: "Tomato", correct: true },
      { text: "Onion", correct: true },
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
      { text: "American", correct: true },
      { text: "Cheddar", correct: true },
      { text: "Swiss", correct: true },
      { text: "All of the above", correct: true },
    ],
  },
  {
    question: "What is a common condiment for a hamburger?",
    answer: [
      { text: "Ketchup", correct: true },
      { text: "Mustard", correct: true },
      { text: "Mayonnaise", correct: true },
      { text: "All of the above", correct: true },
    ],
  },
];

let score = 0;
let currQues = 0;
let startBtn = document.getElementById("start");
let questio = document.getElementById("ques");

function start() {
  // hide the start button
  startBtn.style.display = "none";
  // show the questions
  questio.style.display = "block";
  // show title of the question
  let title = document.createElement("h1");
  title.innerHTML = ques[currQues].question;
  title.classList.add("text-2xl", "font-bold", "mb-4", "text-neutral-700");
  questio.appendChild(title);
  // show the answers
  let btnsDiv = document.createElement("div");
  btnsDiv.setAttribute("id", "btns");
  btnsDiv.classList.add("grid", "gap-3");
  ques[currQues].answer.forEach((ans) => {
    let btn = document.createElement("button");
    btn.innerHTML = ans.text;
    btn.classList.add(
      "bg-blue-500",
      "hover:bg-blue-600",
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
    btnsDiv.appendChild(btn);
  });

  questio.appendChild(btnsDiv);
}
