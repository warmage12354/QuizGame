// gets the buttons from quizSelection
import { arrayQuestions } from "../quizzes/arrayQuiz.js" 
import { methodQuestions } from "../quizzes/methodQuiz.js" 
import { variableQuestions } from "../quizzes/variableQuiz.js" 
let arrbtn = document.getElementById("Array-Button")
let varbtn = document.getElementById("Variable-Button")
let methodbtn = document.getElementById("Method-Button")

let arrBool = false; 
let varBool = false; 
let methodBool = false;



function arrayButton() { 

        arrbtn.addEventListener("click", function(event) { 

            let arrBool = true; 
            let varBool = false; 
            let methodBool = false;





        } )
       
        
        return arrBool;
    
    

} 


 function varButton() { 

   
        
    varbtn.addEventListener("click", function(event) { 

        let arrBool = false; 
        let varBool = true; 
        let methodBool = false;





    } )
        
        return varBool;

    } 
    




export function methodButton() { 

    
    
        
    methodbtn.addEventListener("click", function(event) { 

        let arrBool = false; 
        let varBool = false; 
        let methodBool = true;





    } )

    return methodBool;
} 

export function quiz() { 

    if(arrayButton()) { 

        return getArrayQuiz

    }

   

       
    if(varButton()) { 

        return getVariableQuiz();

    }
    

    if(methodButton()) { 


        return getMethodQuiz();

    }
 

}

quiz();

// functions that return each of the imported arrays

const getArrayQuiz = () => { 


    console.log("In Array Quiz")
   return arrayQuestions;

} 

 const getVariableQuiz = () => { 

    console.log("In Variable Quiz")
    
    return variableQuestions;

} 

 const getMethodQuiz =() => { 


    console.log("In Method Quiz")


     return methodQuestions;

    
} 