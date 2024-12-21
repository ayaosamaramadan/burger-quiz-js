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

function updateQuestion(){
  span1.innerHTML = score + " / ";
  scoreDiv.appendChild(span1);
  
  span2.innerHTML = fullScore;
  span2.classList.add("text-red-500");
  scoreDiv.appendChild(span2);

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
    btn.addEventListener("click", function(){
      if(ans.correct){
        score++;
        span1.innerHTML = score + " / ";
      }

      // disable all buttons after clicking one
      btnsDiv.querySelectorAll("button").forEach(button => button.disabled = true);
      
    
      if(ques[currQues]==ques[ques.length-1]){
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
        finishBtn.addEventListener("click", function(){});

        questio.appendChild(finishBtn);
      }
      else{
        let nextBtn = document.createElement("button");
        nextBtn.innerHTML = "Next";
        nextBtn.classList.add(
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
        nextBtn.addEventListener("click", function(){
          currQues++;
          if(currQues < ques.length){
            questio.innerHTML = "";
            btnsDiv.innerHTML = "";
            updateQuestion();
          } 
        });
        questio.appendChild(nextBtn);
      }
    } );
    btnsDiv.appendChild(btn);
  });

  questio.appendChild(btnsDiv);
}
function start() {
  // hide the start button
  startBtn.style.display = "none";
  // show the questions
  questio.style.display = "block";

  // show the score
  
 updateQuestion();
}




