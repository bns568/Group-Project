

//creating an array that stores is the questions for the topic functions
funcQuestionArray= [];


//assigning my HTLML element to a variable that holds the spot for the question
let questionsAppear = document.getElementById('populateQuestions')

//assigning my HTML elements with attribute class to a variable that will hold the list of answer choice
let answersAppear = document.getElementsByClassName('answerChoice')
console.log(answersAppear)

//creating a variable that will hold the HTML element which displays response to user after they click
let responseAppear = document.getElementById('response')






//creating an object constructor with properties and method for the questions
let quizQuestions = function(topics,questions,answerOptions, correct_answers, incorrect_answers,response)
{
    this.topics = topics,
    this.questions =questions,
    // this.userAnswers = userAnswers -- 
    this.answerOptions= answerOptions;
    this.correct_answers= correct_answers;
    this.incorrect_answers = incorrect_answers;
    this.response=response
}

questions_Functions1= new quizQuestions( 'Function','JS does not execute a code block in a function unless the function is________?',['invoke','define','construct','declare'],0,[1,2,3],['correct','incorrect'])

questions_Functions2= new quizQuestions( 'Function',' An invoked function is the________ thing the JS interpreter executes when a page load.',[' first','final','second','third'],0,[1,2,3],['correct','incorrect'])

console.log(questions_Functions1)
console.log(questions_Functions2)


//pushing the questions of the function questions objects into an array that holds all the questions for the function topic
funcQuestionArray.push(questions_Functions1,questions_Functions2);
console.log(funcQuestionArray);




//creating a function that populates question on the html page
let questionPopulate= function(){
    // for(let i=0;i<funcQuestionArray.length;i++){    --- this for loop is needed for dynamically loop to our array of function questions objects, but I am not able to make it work right now. Insted of putting funcQuestionArray[i] below, i put funcQuestionArray[0].questions, just to make it work on the HTML page.
    
        questionsAppear.innerText = funcQuestionArray[0].questions
}
questionPopulate();

//creating a function to randomized the answer options (not part of the MVP)

//creating a function that will populate the answer option property in the function questions object
let answersChoices = function(){
    //again the below is working but i need to know how to run this in a loop.
    for (let i=0;i<answersAppear.length;i++){
    answersAppear[i].innerText=funcQuestionArray[0].answerOptions[i]
    }
}
answersChoices();

//creating an function for an event handler that will give a response each time a user click on an answer choice
let correctResponse = function(){
responseAppear.innerText= 'correct'
}
// correctChoice();

//creating event handler to give response when correct choice is clicked
let correct_Clicked = function(e) {
    correctResponse();
}   


// creating an code to run when the event click is fired in my HTML
 answersAppear[0].addEventListener('click',correct_Clicked)
