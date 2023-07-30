'use strict';
let questionBody= document.getElementById("questions"); //Qustion title
let answerOne= document.getElementById("answer1");
let answerTwo= document.getElementById("answer2");
let answerThree= document.getElementById("answer3");
let answersContainer=document.getElementById('answersContainer');//quiz form
let questionNumber=document.getElementById('questionNumber');
let currentQuestion=0;
let quizContainer=document.getElementById("questionContainer");
let nextButton=document.getElementById('nextButton');
let correctAnswerCount=0;
let choosedAnswer=0;
let userQuizAnswers=[];
let enableNextButton=document.getElementById('btn-next');
let x=[];


/*Array of object that conatin: questions, answers, and the correct answer */

let jsQuiz=[
    {
        questions:" 1- How to you select an element based on its css class?",
        choises:["getElementByClass" ,"querySelector","getElementById"],
        correctAnswer:"querySelector",
        questionQuizNumber:'1'

    },
    {
        questions:" 2- How to write an IF statement in JavaScript?",
        choises:["if(i==5)","if i=5","if i=5then"],
        correctAnswer:"if(i==5)",
        questionQuizNumber:'2'
    },
    {
        questions:" 3- How do you declare a JavaScript variabble?",
        choises:["variable carName;","none of these","let carName"],
        correctAnswer:"let carName",
        questionQuizNumber:'3'
    }
    ,
    {
        questions:" 4- Is it necessary for the external script file to contain a script tag?",
        choises:["Yes","No","None of above"],
        correctAnswer:"No",
        questionQuizNumber:'4'
    },
    {
        questions:" 5- Which built-in method calls a function for each element in the array? ",
        choises:["while()","loop()","forEach()"],
        correctAnswer:"forEach()",
        questionQuizNumber:'5'
    },
    {
        questions:" 6- Which built-in method returns the string representation of the number's value? ",
        choises:[" toString()","None of the above.","toNumber()"],
        correctAnswer:" toString()",
        questionQuizNumber:'6'
    },
    {
        questions:" 7- Which of the following function of String object splits a String object into an array of strings by separating the string into substrings?",
        choises:["  slice()","replace()"," split()"],
        correctAnswer:"split()",
        questionQuizNumber:'7'
    },
    {
        questions:" 8- Which of the following function of String object returns the calling string value converted to upper case?  ",
        choises:[" toUpperCase()"," toString()"," toLocaleUpperCase()"],
        correctAnswer:"toUpperCase()",
        questionQuizNumber:'8'
    },
    {
        questions:" 9-Which of the following function of Array object adds one or more elements to the end of an array and returns the new length of the array?",
        choises:["map() ","push()"," join()"],
        correctAnswer:"push()",
        questionQuizNumber:'9'
    },
    {
        questions:" 10- Which of the following function of Boolean object returns the primitive value of the Boolean object? ",
        choises:[" None of the above. ","toSource()","valueOf()"],
        correctAnswer:"valueOf() ",
        questionQuizNumber:'10'
    },


];

/*To start the quize */
intitalization();

function intitalization(){
    quizBeginning(); /*We call this function to start from question 1 */
   // answersContainer.addEventListener('click',function(e){
    // let buttonClicked=e.target;
    // checkAnswer(buttonClicked.innerText); // to check the answers and modefied the correct answers counter 
}
//)    }

/*To start the first quiz */
function quizBeginning(){
   
    questionBody.innerHTML=jsQuiz[0].questions;
    answerOne.innerHTML=jsQuiz[0].choises[0];
    answerTwo.innerHTML=jsQuiz[0].choises[1];
    answerThree.innerHTML=jsQuiz[0].choises[2];
    questionNumber.innerHTML=jsQuiz[0].questionQuizNumber;
    enableNextButton.disabled=true
}

function showNextQuestion(){
    if(currentQuestion==jsQuiz.length-2){
        nextButton.textContent='Submit'
    }
    if(currentQuestion==jsQuiz.length-1){
    
        nextButton.href='../../jsResult.html';
    }
    else{
        
        enableButton();
 
    }
    LocalStorageFrom();
}


/*To store the options number after clicking on options */

input1.addEventListener('click',function(e) {
   
    userQuizAnswers.push(1);
   enableNextButton.disabled=false;

});

input2.addEventListener('click',function(e){
 
    userQuizAnswers.push(2);
    enableNextButton.disabled=false
    
 });

 input3.addEventListener('click',function(e){
 
    userQuizAnswers.push(3);
    enableNextButton.disabled=false

 });

function enableButton(){
    currentQuestion++;
    questionBody.innerHTML=jsQuiz[currentQuestion].questions;
    answerOne.innerHTML=jsQuiz[currentQuestion].choises[0];
    answerTwo.innerHTML=jsQuiz[currentQuestion].choises[1];
    answerThree.innerHTML=jsQuiz[currentQuestion].choises[2];
    questionNumber.innerHTML=jsQuiz[currentQuestion].questionQuizNumber;
    enableNextButton.disabled=true;
    input1.checked = false;
    input2.checked = false;
    input3.checked = false;
   }
  

/*Local storage */
function LocalStorageFrom(){
    console.log(correctAnswerCount);
    let array=JSON.stringify(correctAnswerCount); // to send the Answer counter value to result page
    localStorage.setItem('userAnswers',array);
    let array2=JSON.stringify(userQuizAnswers); // to send the answers options number that the user chose to result page
    localStorage.setItem('userQuizAnswers',array2);
    let array3=JSON.stringify(jsQuiz);
    localStorage.setItem('jsArray',array3)
}
/*Timer: 3 minutes */
function startTimer(duration, view_date) {
    let countdown = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(countdown / 60, 10);
        seconds = parseInt(countdown % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        view_date.textContent = minutes + ":" + seconds;

        if (--countdown < 0) {
            location.href='../../jsResult.html'
        }
    }, 1000);
}

window.onload = function () {
   let minutesOfFive = 60 * 3,
        view_date = document.querySelector('#time');
    startTimer(minutesOfFive, view_date);
};