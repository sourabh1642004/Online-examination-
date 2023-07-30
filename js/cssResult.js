'use strict';

 let tableBody=document.getElementById("tablebody");
let correctAnswers=0;
let wrongAnswers=0;
let resultP=document.getElementById('result-p');
let videoCongrats=document.getElementById('video');
let finalResult=document.getElementById('finalResult');
/*To get username */


/*To get the correct answers */
function GetCssDataFromLocalStorage(){//to recive the locale storage value

    /*To get username */
    let storageDataUserInfo=localStorage.getItem('regData');
    let userinfo=JSON.parse(storageDataUserInfo);
    console.log(userinfo);

    /* To get the counter of correct answers*/
    let storageData=localStorage.getItem('userCssAnswers');
    let parseData=JSON.parse(storageData); //store the correct answers counter

    /* To get the user's answers*/
    let storageDataAnswers=localStorage.getItem('userCssQuizAnswers'); // for user answers
    let parseDataAnswers=JSON.parse(storageDataAnswers);

     /* To get the quiz array*/
     let storageQuizArray=localStorage.getItem('cssArray'); // for user answers
     let parseCssArray=JSON.parse(storageQuizArray);
    renderInformation(parseData,parseDataAnswers,userinfo,parseCssArray);
}
GetCssDataFromLocalStorage();

function renderInformation(parseData,parseDataAnswers,userinfo,parseCssArray){

    let correctQuizAnswers=[1,1,1,1,1,2,3,1,2,3] ; //The correct Html quiz answers
    let question=[
        `Which of the below is the abbreviation of CSS?`,
        `Which of the below CSS properties is used to change the background color of CSS?`,
        `Which of the below is correct syntax when we put a line over text in CSS?`,
        `Which below property in CSS is used to set the indentation of the first line in a block of text?`,
        `Which of the below CSS properties represent the order of flex items in the grid container?`,
        `Which of the correct syntax to add the external stylesheet in CSS?`,
        `Which property in CSS is responsible for setting the difference between two lines?`,
        `Which below function in CSS is used to perform the calculation?`,
        `Which of the below CSS property is used to set the origin of the background image in bootstraps?`,
        `Which below CSS property best describes how an image or video fits into a container?`
    ];
    let anwers=[
        `Cascading style sheets`,
        `background-color`,
        `text-decoration: overline`,
        `text-indent property`,
        `order`,
        `< link rel=”stylesheet” type=”quiz/css” href=”quiz.css” >`,
        `line-height property`,
        `calc() function`,
        `background-origin`,
        `object-fit`
    ];
    for (let i=0;i<correctQuizAnswers.length;i++){
        console.log(parseCssArray[i].choises[parseDataAnswers[i]]);
        /*To add a row and cells with the questions number and true ot false value depends on the user answers */
      let tr=document.createElement('tr');
      let td1=document.createElement('td');
      let td2=document.createElement('td');
      let td3=document.createElement('td');
      let td4=document.createElement('td');
      let td5=document.createElement('td');
      td5.style.fontWeight="bold";
      tableBody.appendChild(tr);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);
      td4.innerHTML='false';
      if(parseDataAnswers&&parseDataAnswers.length){ //When the time will finish without answering any question
          console.log('not empty');
      }else{
          console.log('empty');
          parseDataAnswers=[0,0,0,0,0,0,0,0,0,0];
      }
      /*To check if user's answers are correct or not and to some actions in  */
      if(parseDataAnswers[i]==correctQuizAnswers[i]){
        console.log(td1);
        console.log(td2);
        td1.innerHTML = i+1;
        td2.innerHTML=question[i];
        td3.innerHTML=anwers[i]
        td4.innerHTML=parseCssArray[i].choises[parseDataAnswers[i]-1];
        td5.innerHTML ="true";
        correctAnswers=correctAnswers+1;
        console.log(correctAnswers);
        td5.style.color='#75d375';
        
        }
        else{
        td1.innerHTML = i+1;
        td2.innerHTML=question[i];
        td3.innerHTML=anwers[i];
        td4.innerHTML=parseCssArray[i].choises[parseDataAnswers[i]-1];
        td5.innerHTML ="false";
        wrongAnswers=i+1;
        
        td5.style.color='red';

    }

}//Dear ${userinfo[0].fname}  ${userinfo[0].lname}
    if(correctAnswers>=5){
        finalResult.innerHTML='Congratulations, you did it!';
        finalResult.style.color = "#29c429";
    }
    else{
        finalResult.innerHTML=`Unfortunately you didn't pass, please try again.`;
        finalResult.style.color = "#f22929";
        videoCongrats.style.display='none';
    }
    resultP.innerHTML= `Dear ${userinfo[0].fname}  ${userinfo[0].lname} your score is ${correctAnswers} of 10, the number of the correct answers are ${correctAnswers} and the number of the wrong answers are ${10-correctAnswers}.`;
}

/*To show the table after clicking the show answers button */
function showtable() {
    document.getElementById("htmltable").style.display = 'block';
}