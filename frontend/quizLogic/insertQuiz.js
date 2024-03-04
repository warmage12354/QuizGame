// import the quizzes from the quizes folder   
import { arrayQuestions } from "../quizzes/arrayQuiz.js" 
import { methodQuestions } from "../quizzes/methodQuiz.js" 
import { variableQuestions } from "../quizzes/variableQuiz.js" 

// gets button id from quizSelection page
let arrbtn = document.getElementById("Array-Button")
let varbtn = document.getElementById("Variable-Button")
let methodbtn = document.getElementById("Method-Button")

//sets inital value to false
let arrBool = false; 
let varBool = false; 
let methodBool = false;






        
            // set buttons to listen for a "click"
            arrbtn.addEventListener("click", function(event) { 
                
                // sets the arrBool to true  
                // sets rest to false to avoid any potential errors
                 arrBool = true;   
                 varBool = false; 
                 methodBool = false;
                
                 //runs the chooseQuiz function which will return the correct object
                 chooseQuiz() 
                 // puts the object into local storage to be used in another page
                 localStorage.setItem('theQuiz', JSON.stringify(chooseQuiz()) )
    
            } )

        

        varbtn.addEventListener("click", function(event) { 

             arrBool = false; 
             varBool = true; 
             methodBool = false;
             
             chooseQuiz()
             localStorage.setItem('theQuiz', JSON.stringify(chooseQuiz()) )
    
    
    
    
        } )
        methodbtn.addEventListener("click", function(event) { 

            arrBool = false; 
            varBool = false; 
            methodBool = true;
   
            chooseQuiz()
            localStorage.setItem('theQuiz', JSON.stringify(chooseQuiz()) )
   
   
   
       } )
   

       // 
export function chooseQuiz() { 
    
   
    // if arrBool is true it will return the array quiz
   if(arrBool) { 
       return getArrayQuiz()
       
   }

  

    // if varBool is true it will return the variable quiz
   if(varBool) { 

       return getVariableQuiz();

   } 
   
   // if methodBool is true it will return the method quiz
   if(methodBool) { 


       return getMethodQuiz();

   } 

}
        
    
// function returns arrayquestions
const getArrayQuiz = () => { 


    
   return arrayQuestions;

} 

// function returns variablequestions

 const getVariableQuiz = () => { 

   
    
    return variableQuestions;

} 
// function returns methodquestions

 const getMethodQuiz =() => { 


   

     return methodQuestions;

    
} 
        
    
    
    
    
   
    
        
        
    
           



