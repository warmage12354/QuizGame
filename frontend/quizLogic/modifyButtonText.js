
// gets the text element from the respective buttons
let arrButtonText = document.getElementById('arrButtonContent') 
let varButtonText = document.getElementById('varButtonContent') 
let methodButtonText = document.getElementById('methodButtonContent') 

// sets the stringfied varaible back to its orginal state 
//these variables will be used to get the average
let userScore = JSON.parse(localStorage.getItem('score'))
let totalQuestions = JSON.parse(localStorage.getItem('numberQuestions'))

// calculates average score
let averageScore = (userScore/totalQuestions) * 100; 

//bug testing
console.log('userScore is : ' + userScore)
console.log('totalQuestions is : ' + totalQuestions)
console.log('averageScore is : ' + averageScore)

// sets the text of the button and will eventaully display the correct average
arrButtonText.innerText = "Array Quiz \n " + "Average Score : " + averageScore +"%"
varButtonText.innerText = "Variable Quiz " + "Average Score : " + averageScore +"%"
methodButtonText.innerText = "Method Quiz " + "Average Score : " + averageScore +"%"   
