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
let enableNextButton=document.getElementById('btn-next');
let correctAnswerCount=0;
let choosedAnswer=0;
let userQuizAnswers=[];
let x=[];

/*Array of object that conatin: questions, answers, and the correct answer */

let htmlQuiz=[
    {
        questions:"1- What does HTML stands for?",
        choises:["Hypertext Markup Language. " ,"Hypertext Machine language. "," Hypertext and links markup language."],
        correctAnswer:"Hypertext Markup Language",
        questionQuizNumber:'1'
    
    
    },
    {
        questions:" 2- Which of the following HTML Elements is used for making any text bold ?",
        choises:[`<  b >`,` < p >`,` < i >`],
        correctAnswer:"< b >",
        questionQuizNumber:'2'
    
    },
    {
        questions:" 3- Which of the following attributes is used to add link to any element?",
        choises:["href","ref","link"],
        correctAnswer:"href",
        questionQuizNumber:'3'
    
    },
    {
        questions:"4- Where is the meta tag only found?",
        choises:["The last page","The home page","The second page"],
        correctAnswer:"The second page",
        questionQuizNumber:'4'
    },
    {
        questions:"5- How many attributes are there in HTML5?",
        choises:["2","4"," None of the above"],
        correctAnswer:" None of the above",
        questionQuizNumber:'5'
    },
    {
        questions:"6- How is document type initialized in HTML5?",
        choises:["< /DOCTYPE >","< /DOCTYPE HTML >","< !DOCTYPE HTML > "],
        correctAnswer:"< !DOCTYPE HTML > ",
        questionQuizNumber:'6'
    },
    {
        questions:"7- Which of the following HTML element is used for creating an unordered list?",
        choises:[" < ui >"," < i >"," < ul >"],
        correctAnswer:" < ul > ",
        questionQuizNumber:'7'
    },
    {
        questions:"8- Which of the following characters indicate closing of a tag? ",
        choises:[". ","/ ","! "],
        correctAnswer:" / ",
        questionQuizNumber:'8'
    },
    {
        questions:"9- Which of the following is the correct way of creating an hyperlink in HTML?",
        choises:[` < a link=“” Geeksforgeeks> </ a> `,` < a href= “”>Geeksforgeeks</ a> `,`  < a href=“ /a>`],
        correctAnswer:"  < a href= “”>Geeksforgeeks< /a> ",
        questionQuizNumber:'9'
    },
    {
        questions:"10- How many heading tags are there in HTML5?",
        choises:[" 2"," 6"," 5"],
        correctAnswer:" 6 ",
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
   
    questionBody.innerHTML=htmlQuiz[0].questions;
    answerOne.innerHTML=htmlQuiz[0].choises[0];
    answerTwo.innerHTML=htmlQuiz[0].choises[1];
    answerThree.innerHTML=htmlQuiz[0].choises[2];
    questionNumber.innerHTML=htmlQuiz[0].questionQuizNumber;
    enableNextButton.disabled=true
}


function showNextQuestion(){
if(currentQuestion==htmlQuiz.length-2){
    nextButton.textContent='Submit'
}
    if(currentQuestion==htmlQuiz.length-1){
      
        nextButton.href='../../htmlResult.html';
       
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
    questionBody.innerHTML=htmlQuiz[currentQuestion].questions;
    answerOne.innerHTML=htmlQuiz[currentQuestion].choises[0];
    answerTwo.innerHTML=htmlQuiz[currentQuestion].choises[1];
    answerThree.innerHTML=htmlQuiz[currentQuestion].choises[2];
    questionNumber.innerHTML=htmlQuiz[currentQuestion].questionQuizNumber;
    enableNextButton.disabled=true;
    input1.checked = false;
    input2.checked = false;
    input3.checked = false;
   }
  
/*Local storage */
function LocalStorageFrom(){
    console.log(correctAnswerCount);
    let array=JSON.stringify(correctAnswerCount); // to send the Answer counter value to result page
    localStorage.setItem('userHtmlAnswers',array);
    let array2=JSON.stringify(userQuizAnswers); // to send the answers options number that the user chose to result page
    localStorage.setItem('userHtmlQuizAnswers',array2);
    let array3=JSON.stringify(htmlQuiz);
    localStorage.setItem('htmlArray',array3)
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
            location.href='../../htmlResult.html'
        }
    }, 1000);
}

window.onload = function () {
   let minutesOfFive =60*3,
        view_date = document.querySelector('#time');
    startTimer(minutesOfFive, view_date);
};