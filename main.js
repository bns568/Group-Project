
//==================================GLOBAL VARIABLES DECLARATION & ASSIGNMENT===============================
//creating an array that stores the questions for the topic 'functions'
funcQuestionArray= [];
console.log(funcQuestionArray)


//assigning my HTLML element to a variable that holds the spot for the question
let questionsAppear = document.getElementById('populateQuestions')


//assigning my HTML elements with attribute class to a variable that will hold the list of answer choice.
let answersAppear = document.getElementsByClassName('answerChoice')
console.log(answersAppear)


//creating a variable that will hold the HTML element which displays response to user after they click
let responseAppear = document.getElementById('response')

//creating a variable that will hold the index that will track which questions we ar on
let index=0


// creating a varibale that stores an array boolean values (true) when user clicks on correct choice
let correctAnswerChosen = [];
console.log(correctAnswerChosen);

// creating a varibale that stores an array boolean values (false) when user clicks on incorrect choice
let incorrectAnswerChosen = [];
console.log(incorrectAnswerChosen);





//=====================================OBJECT CONSTRUCTOR & INSTANCES=======================================

//creating an object constructor with properties and method for the questions
let quizQuestions = function(topics,questions,answerOptions,correct_answers,response,correctAnswerClicked,incorrectAnswerClicked)
{
    this.topics = topics,
    this.questions =questions,
    // this.userAnswers = userAnswers -- 
    this.answerOptions= answerOptions;
    this.correct_answers= correct_answers;
    this.response=response
    this.correctAnswerClicked= correctAnswerClicked
    this.incorrectAnswerClicked=incorrectAnswerClicked
}

questions_Functions1= new quizQuestions( 'Function','JS does not execute a code block in a function unless the function is________?',['invoke','define','construct','declare'], null, ['correct','incorrect'],0,0)

questions_Functions2= new quizQuestions( 'Function',' An invoked function is the________ thing the JS interpreter executes when a page loads.',[' first','final','second','third'],null,['correct','incorrect'],0,0)



console.log(questions_Functions1)
console.log(questions_Functions2)


//pushing the questions of the function questions objects into an array that holds all the questions for the function topic
funcQuestionArray.push(questions_Functions1,questions_Functions2);
console.log(funcQuestionArray);



//==========================================Index for tracking what questions we are on======================================================

//The "index" variable, declared above, will keep track of what question we are on, and we will pass this variable whereever we need to pass an index to the questions array

    for(let i=0;i<funcQuestionArray.length;i++){
        index = funcQuestionArray.indexOf(funcQuestionArray[i])
        console.log(index)
    }
        
    
    



//=====================================POPULATINg DOM DYNAMICALLY===========================================

//creating a function that populates question on the html page
let questionPopulate= function(){
    // Zach mentioned it is better not to run a for loop here. Only run a for loop if we wanted all the questions to populate at once on the page. Since we want the user to answer one question at at time before the next one shows then it is better to access the "questions" propoerty of the questions object  using the index of that object in the array. 
        questionsAppear.innerText = funcQuestionArray[index].questions
        
}
questionPopulate();

//Placeholder for creating a function to randomize the answer options each time they appear (not part of the MVP)

//creating a function that will populate the "answer options" property
let answersChoices = function(){
    //since "answerAppear" was assigned a class name, then we can use it as an array. class attribute acts an array.
    for (let i=0;i<answersAppear.length;i++){
    answersAppear[i].innerText=funcQuestionArray[index].answerOptions[i]
    }
}
answersChoices();




//===================================FUNCTIONS FOR EVENT HANDLERS ==========================================



//Function that will give the  response "correct" when the correct choice is clicked + score property (boolean)
let correctResponse = function(){
        responseAppear.innerText= funcQuestionArray[index].response[0]
        funcQuestionArray[index].correct_answers= true 
        correctAnswerChosen.push(funcQuestionArray[index].correct_answers)

}

//Function that will give the response "incorrect" when the incorrect choice is clicked + score property (boolean)
let incorrectResponse = function(){
    responseAppear.innerText= funcQuestionArray[index].response[1]
    funcQuestionArray[index].correct_answers= false
    incorrectAnswerChosen.push(funcQuestionArray[index].correct_answers)

}
//creating function that makes "Next Button" appear after an answer is clicked
let showButton = function(){
    if(funcQuestionArray[index].correctAnswerClicked==1 || funcQuestionArray[index].incorrectAnswerClicked ==1){
        let questionHolder = document.getElementById('buttonHolder')
        let questionButton= document.createElement('button')
        questionHolder.appendChild(questionButton)
        questionButton.innerText = 'Next Question'   
    }
}


//function for not allowing the user to choose an answer more than once. The placement of this may be off, just because at this point of reading the script, you have not gotten to the event yet. 
let oneChoice =function(){
    answersAppear[0].removeEventListener('click',correct_Clicked)
    answersAppear[1].removeEventListener('click',incorrect_Clicked)
    answersAppear[2].removeEventListener('click',incorrect_Clicked)
    answersAppear[3].removeEventListener('click',incorrect_Clicked)
}



//===================================EVENT HANDLERS==============================

//Event hanfdler for correct response
let correct_Clicked = function(e) {
    correctResponse();
    oneChoice();
    funcQuestionArray[index].correctAnswerClicked= funcQuestionArray[index].correctAnswerClicked + 1
    showButton();

}   


//Event handler for incorrect responses
let incorrect_Clicked = function(e) {
    incorrectResponse();
    oneChoice();
    funcQuestionArray[index].incorrectAnswerClicked=funcQuestionArray[index].incorrectAnswerClicked +1
    showButton();

}   


//=====================================FIRING EVENTS + EXECUTION=========================================
// creating an code to run when the event click is fired in my HTML
 answersAppear[0].addEventListener('click',correct_Clicked)
 answersAppear[1].addEventListener('click',incorrect_Clicked)
 answersAppear[2].addEventListener('click',incorrect_Clicked)
 answersAppear[3].addEventListener('click',incorrect_Clicked)

// //creating a code to run the next question in the array when the click "Next question" button is clicked
//==============================
