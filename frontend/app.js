// Setting up an array of questions to be asked with the answers 
// new comment
import {getArrayQuiz} from "./insertQuiz.js";


const QuestionList = getArrayQuiz(); 

let submitButton = document.querySelector(".Submit-Button")

submitButton.addEventListener('click', () => { 

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


} )

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
    const choiceDiv = document.createElement("div")
    //sets input to type to a radio button and its name to answer
    choice.type = "radio";
    choice.name = "answer"; 
    choice.setAttribute("id", "selection" )
    choiceLabel.setAttribute("id", "selectionsText")  
    choiceLabel.setAttribute("for","selection")

    // sets the value to be incremented
    choice.value = i;

    // runs through and adds all the answers from the object
    choiceLabel.textContent = QuestionList[currQuestion].answer[i].text;

    // gives choicesDiv an id 
    choicesdiv.setAttribute("id","Choices")


    //adds all the elements to the screen 
    choiceDiv.appendChild(choice) 
    choiceDiv.appendChild(choiceLabel)
    options.appendChild(choiceDiv) 
    
   
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



// resets the quiz
const resetQuiz = () => {
  
  let options = document.getElementById("options")

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
