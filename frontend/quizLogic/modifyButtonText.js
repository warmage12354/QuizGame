
// gets the text element from the respective buttons
let arrButtonText = document.getElementById('arrButtonContent') 
let varButtonText = document.getElementById('varButtonContent') 
let methodButtonText = document.getElementById('methodButtonContent') 

// sets the stringfied varaible back to its orginal state 
//these variables will be used to get the average
let userScore = JSON.parse(localStorage.getItem('score'))
let totalQuestions = JSON.parse(localStorage.getItem('numberQuestions'))

// calculates average score
let averageScore = userScore/totalQuestions; 

//bug testing
console.log('userScore is : ' + userScore)
console.log('totalQuestions is : ' + totalQuestions)
console.log('averageScore is : ' + averageScore)

// sets the text of the button and will eventaully display the correct average
arrButtonText.innerText = "Array Quiz "
varButtonText.innerText = "Variable Quiz"
methodButtonText.innerText = "Method Quiz"   
