// Setting up an array of questions to be asked with the answers 
// new comment
const QuestionList = [
  {
    question: "What is a  variable?",
    answer: [
      { text: "A type of button", isCorrect: false },
      { text: " a place to store data", isCorrect: true },
      { text: "idk", isCorrect: false },
    ],
  },
  {
    question: "What is a Array?",
    answer: [
      { text: "A variable that stores a list of values ", isCorrect: true },
      { text: " A type of object ", isCorrect: false },
      { text: "idk", isCorrect: false },
    ],
  },

  {
    question: "What is a function?",
    answer: [
      { text: " A type of class  ", isCorrect: false },
      { text: " A set of statements that perform a job", isCorrect: true },
      { text: "idk", isCorrect: false },
    ],
  },
]; 



// current question is intiailly set to zero and will display the first question
let currQuestion = 0;
let score = 0;

const loadQuiz = () => {
  // sets the variable question equal to h2 element with the id 'Question'
  const question = document.getElementById("Question");
  // sets the textt of the h2 element equal to the first question
  question.textContent = QuestionList[currQuestion].question;

  const options = document.getElementById("options");
  // used to refresh the "radio" buttons
  options.innerHTML = "";

  // adds in the potential answers of the question
  for (let i = 0; i < QuestionList[currQuestion].answer.length; i++) {
    // creates div to put input and label in
    const choicesdiv = document.createElement("div");
    const choice = document.createElement("input");
    const choiceLabel = document.createElement("label");

    //sets input to type to a radio button and its name to answer
    choice.type = "radio";
    choice.name = "answer"; 
    choiceLabel.setAttribute("id", "selectionsText")

    // sets the value to be incremented
    choice.value = i;

    // runs through and adds all the answers from the object
    choiceLabel.textContent = QuestionList[currQuestion].answer[i].text;

    //adds all the elements to the screen
    choicesdiv.appendChild(choice);
    choicesdiv.appendChild(choiceLabel);
    options.appendChild(choicesdiv);
  }
};

// loads the quiz after
loadQuiz();

// fucntion that will laod the next question
const nextQuestion = () => {
  // if there are still questions in the array then load the next question
  if (currQuestion < QuestionList.length - 1) {
    currQuestion++;
    loadQuiz();

    // if there are no questions left print the score
  } else {
    // reloads webpage
    resetQuiz();
  }
};

const checkAnswer = () => {
  const selectedAnswer = parseInt(
    document.querySelector('input[name="answer"]:checked').value
  );

  // if it is correct the score goes up and it goes to the next question
  if (QuestionList[currQuestion].answer[selectedAnswer].isCorrect) {
    score++;
    nextQuestion();
    console.log("is Correct");

    // goes to the next question without any points
  } else {
    console.log("is not correct");
    nextQuestion();
  }
};

// resets the quiz
const resetQuiz = () => {
  
  // gets the element then removes it
  const submitButton = document.getElementById("SubmitButton");
  submitButton.remove();
  //Sets the header to the question "Reset?"
  const question = document.getElementById("Question");
  question.textContent = "Reset?"; 
  // sets the contents of option to the score the user got
  document.getElementById("options").innerHTML =
    "You got a score of " + score + " out of  " + QuestionList.length;


  const resetBtn = document.createElement("button");

  resetBtn.setAttribute("id", "resetButton");
  resetBtn.textContent = "Reset";

  options.appendChild(resetBtn);

  resetBtn.addEventListener("click", () => {

    location.reload();
  
  
  });
};
