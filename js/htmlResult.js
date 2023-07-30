'use strict';

 let tableBody=document.getElementById("tablebody");
let correctAnswers=0;
let wrongAnswers=0;
let resultP=document.getElementById('result-p');
let videoCongrats=document.getElementById('video');
let finalResult=document.getElementById('finalResult');
/*To get username */


/*To get the correct answers */
function GetHtmlDataFromLocalStorage(){//to recive the locale storage value

    /*To get username */
    let storageDataUserInfo=localStorage.getItem('regData');
    let userinfo=JSON.parse(storageDataUserInfo);
    console.log(userinfo);

    /* To get the counter of correct answers*/
    let storageData=localStorage.getItem('userHtmlAnswers');
    let parseData=JSON.parse(storageData); //store the correct answers counter

    /* To get the user's answers*/
    let storageDataAnswers=localStorage.getItem('userHtmlQuizAnswers'); // for user answers
    let parseDataAnswers=JSON.parse(storageDataAnswers);

     /* To get the quiz array*/
     let storageQuizArray=localStorage.getItem('htmlArray'); // for user answers
     let parsehtmlArray=JSON.parse(storageQuizArray);

    renderInformation(parseData,parseDataAnswers,userinfo,parsehtmlArray);
}
GetHtmlDataFromLocalStorage();

function renderInformation(parseData,parseDataAnswers,userinfo,parsehtmlArray){

    let correctQuizAnswers=[1,1,1,3,3,2,3,2,2,2]; //The correct Html quiz answers
    let question=[
        `What does HTML stands for?`,
        `Which of the following HTML Elements is used for making any text bold ?`,
        `Which of the following attributes is used to add link to any element?`,
        `Where is the meta tag only found?`,
        `How many attributes are there in HTML5?`,
        `How is document type initialized in HTML5?`,
        `Which of the following HTML element is used for creating an unordered list?`,
        `Which of the following characters indicate closing of a tag?`,
        `Which of the following is the correct way of creating an hyperlink in HTML?`,
        `How many heading tags are there in HTML5?`
    ]
    let anwers=[
       `Hypertext Markup Language`,
       `< b >`,
       `href`,
       `The second page`,
       `None of the above`,
       `< !DOCTYPE HTML >`,
       `< ul >` ,
       `/`,
        `< a href= “”>Geeksforgeeks< /a>`,
        `6`
    ]

for (let i=0;i<correctQuizAnswers.length;i++){
  
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
    td4.innerHTML=parsehtmlArray[i].choises[parseDataAnswers[i]-1];
    td5.innerHTML ="true";
    correctAnswers=correctAnswers+1;
    console.log(correctAnswers);
    td5.style.color='#75d375';
    
    }
    else{
    td1.innerHTML = i+1;
    td2.innerHTML=question[i];
    td3.innerHTML=anwers[i];
    td4.innerHTML=parsehtmlArray[i].choises[parseDataAnswers[i]-1];
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
    finalResult.innerHTML=`Unfortunately you didn't pass, please try agian.`;
    finalResult.style.color = "#f22929";
    videoCongrats.style.display='none';
}
resultP.innerHTML= `Dear ${userinfo[0].fname}  ${userinfo[0].lname} your score is ${correctAnswers} of 10, the number of the correct answers are ${correctAnswers} and the number of the wrong answers are ${10-correctAnswers}.`;
}

/*To show the table after clicking the show answers button */
function showtable() {
document.getElementById("htmltable").style.display = 'block';
}