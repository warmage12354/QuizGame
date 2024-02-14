// import the quizzes from the quizes folder
import { arrayQuestions } from "../quizzes/arrayQuiz.js" 
import { methodQuestions } from "../quizzes/methodQuiz.js" 
import { variableQuestions } from "../quizzes/variableQuiz.js" 

    // gets the buttons from quizSelection
    let arrbtn = document.getElementById("Array-Button")
    let varbtn = document.getElementById("Variable-Button")
    let methodbtn = document.getElementById("Method-Button")

    let arrClicked = false;
    let varClicked = false;
    let methodClicked = false;
 
    console.log(arrbtn) 
    console.log("Im in app js as well!")
  
    // Returns value of True on arrbtn click
   const arrMethod = () => { 

    arrbtn.addEventListener("click", () => { 

        return  arrClicked = true

        
    } )


  

   } 

    // Returns value of True on varbtn click
   const varMethod = () => { 


    varbtn.addEventListener("click", () => { 

        return  varClicked = true

        
    } )
   }
   
   
    // Returns value of True on methbtn click
   const methMethod = () => { 


    methodbtn.addEventListener("click", () => { 

        return  methodClicked = true

        
    } )
   }


// will be the only export
export function chooseQuiz () { 


    // checks the value of the method and if true returns one of the quizzes

    if(arrMethod() == true) { 

        return getArrayQuiz()

    }

    else if( varMethod() == true ) { 

        return getVariableQuiz()

    }

    else if(methMethod() == true) { 

        return getMethodQuiz()

    }

}

const answer = chooseQuiz();

// functions that return each of the imported arrays

 const getArrayQuiz = () => { 

   

   return arrayQuestions;

} 

 const getVariableQuiz = () => { 

    
    return variableQuestions;

} 

 const getMethodQuiz =() => { 

    

     return methodQuestions;

    
}