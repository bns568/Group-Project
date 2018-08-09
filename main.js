

//creating an array that stores is the questions for the topic functions
funcQuestionArray= [];


//assigning my HTLML element to a variable
let questionsAppear = document.getElementById('populateQuestions')






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
// }
}
questionPopulate();

//creating a function that will populate the answer option property in the function questions object
let answersChoices = function(){
    
}




// //creating a test event handler
// let  = function(){
// alert('it is working')
// }

// //creating an code to run when the event click is fired in my HTML
// functions.addEventlistener('click',test)
