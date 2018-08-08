
//assigning my HTLML element to a variable
let functions = document.getElementById('functions')






//creating an object constructor with properties and method for the questions
let quizQuestions = function(topics,questions, answers, correct_answers, incorrect_answers,response)
{
    this.topics = topics,
    this.questions =questions,
    this.answers = answers,
    this.correct_answers= function () { //I have to test this functions or we can just keep this a property and in our instance object initialize that property with a number (0)
        return this.asnwers[0]
        };
    this.incorrect_answers = function(){ ///I have to test this functions or we can just keep this a property and in our instance object initialize that property with a numbers not =0, such as (1,2,3)
        return this.asnwers[0]
    let wrong= 
    wrong!=this.answers[0]
    return wrong
    };
    this.response=response
}

Questions_Functions= new quizQuestions([ 'Function','Loops', 'Objects', 'DOM', 'Local Storage'],'JS does not execute a code block in a function unless the function is________?',['invoke','define','construct','declare'],'','',['correct','incorrect'])
console.log(Questions_Functions)
console.log(this.correct_answers)





//creating a test event handler
let  = function(){
alert('it is working')
}

//creating an code to run when the event click is fired in my HTML
functions.addEventlistener('click',test)

