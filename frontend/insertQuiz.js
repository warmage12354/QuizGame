import { arrayQuestions } from "./quizzes/arrayQuiz.js" 
import { methodQuestions } from "./quizzes/methodQuiz.js" 
import { variableQuiz } from "./quizzes/variableQuiz.js" 

export const getArrayQuiz = () => { 

   return arrayQuestions;

} 

export const getVariableQuiz = () => { 

    variableQuiz();

} 

export const getMethodQuiz =() => { 

    methodQuestions();

    
}