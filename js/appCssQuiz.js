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

let cssQuiz=[
    {
        questions:" 1- Which of the below is the abbreviation of CSS?",
        choises:[" Cascading style sheets" ," Coded Style Sheet","color and styie sheets"],
        correctAnswer:"Cascading style sheets",
        questionQuizNumber:'1'
    
    },
    {
        questions:" 2- Which of the below CSS properties is used to change the background color of CSS?",
        choises:[" background-color","color-background","color"],
        correctAnswer:"background-color",
        questionQuizNumber:'2'
    },
    {
        questions:" 3- Which of the below is correct syntax when we put a line over text in CSS?",
        choises:[" text-decoration: overline","text-decoration: underline"," text-decoration: none"],
        correctAnswer:"text-decoration: overline",
        questionQuizNumber:'3'
    
    },
    {
        questions:" 4- Which below property in CSS is used to set the indentation of the first line in a block of text?",
        choises:["text-indent property "," text-underlne-property","text-decoration none"],
        correctAnswer:"text-indent property",
        questionQuizNumber:'4'
    
    },
    {
    questions:" 5- Which of the below CSS properties represent the order of flex items in the grid container ?",
    choises:["order "," flot","overflow"],
    correctAnswer:"order",
    questionQuizNumber:'5'
    
    },
    {
        questions:" 6- Which of the correct syntax to add the external stylesheet in CSS?",
        choises:[`< stylesheet > quiz.css </ stylesheet > `,`< link rel=”stylesheet” type=”quiz/css” href=”quiz.css” > `,` < style src = quiz.css >`],
        correctAnswer:"< link rel=”stylesheet” type=”quiz/css” href=”quiz.css” >",
        questionQuizNumber:'6'
        
        },
        {
            questions:" 7- Which property in CSS is responsible for setting the difference between two lines?",
            choises:[" max-height property"," min-height property "," line-height property"],
            correctAnswer:"line-height property",
            questionQuizNumber:'7'
            
            },
            {
                questions:" 8- Which below function in CSS is used to perform the calculation?",
                choises:["calc() function "," cal() function ","calculator() function"],
                correctAnswer:"calc() function",
                questionQuizNumber:'8'
                
                },
                {
                    questions:" 9- Which of the below CSS property is used to set the origin of the background image in bootstraps?",
                    choises:["background-image "," background-origin ","background-size"],
                    correctAnswer:"background-origin",
                    questionQuizNumber:'9'
                    
                    },
                    {
                        questions:" 10- Which below CSS property best describes how an image or video fits into a container? ",
                        choises:["position-hide ","object-move  ","object-fit"],
                        correctAnswer:"object-fit",
                        questionQuizNumber:'10'
                        
                        },
        
    
    ];
    intitalization();

 
    function intitalization(){
      quizBeginning(); /*We call this function to start from question 1 */
 }

  
  /*To start the first quiz */
  function quizBeginning(){
     
      questionBody.innerHTML=cssQuiz[0].questions;
      answerOne.innerHTML=cssQuiz[0].choises[0];
      answerTwo.innerHTML=cssQuiz[0].choises[1];
      answerThree.innerHTML=cssQuiz[0].choises[2];
      questionNumber.innerHTML=cssQuiz[0].questionQuizNumber;
      enableNextButton.disabled=true
  }
  
  function checkAnswer(userAnswer){
      if(userAnswer == cssQuiz[currentQuestion].correctAnswer){ //To check the correct answer by comparing it with the answer in the jsQuiz array
          correctAnswerCount=correctAnswerCount+1; // calculate the correct answers
          console.log('the counter is:', correctAnswerCount);
      }
      //getUserAnswers();
      ; /*we call this function to move for the next question */
      return correctAnswerCount;
  }
  
  function showNextQuestion(){
      if(currentQuestion==cssQuiz.length-2){
          nextButton.textContent='Submit'
      }
      if(currentQuestion==cssQuiz.length-1){
         
          nextButton.href='../../cssResult.html';
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
      questionBody.innerHTML=cssQuiz[currentQuestion].questions;
      answerOne.innerHTML=cssQuiz[currentQuestion].choises[0];
      answerTwo.innerHTML=cssQuiz[currentQuestion].choises[1];
      answerThree.innerHTML=cssQuiz[currentQuestion].choises[2];
      questionNumber.innerHTML=cssQuiz[currentQuestion].questionQuizNumber;
      enableNextButton.disabled=true;
      input1.checked = false;
      input2.checked = false;
      input3.checked = false;
     }
    
/*Local storage */
function LocalStorageFrom(){
    console.log(correctAnswerCount);
    let array=JSON.stringify(correctAnswerCount); // to send the Answer counter value to result page
    localStorage.setItem('userCssAnswers',array);
    let array2=JSON.stringify(userQuizAnswers); // to send the answers options number that the user chose to result page
    localStorage.setItem('userCssQuizAnswers',array2);
    let array3=JSON.stringify(cssQuiz);
    localStorage.setItem('cssArray',array3)
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
            location.href='../../cssResult.html'
        }
    }, 1000);
}

window.onload = function () {
   let minutesOfFive = 60 * 3,
        view_date = document.querySelector('#time');
    startTimer(minutesOfFive, view_date);
};