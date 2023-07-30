'use strict';

 let tableBody=document.getElementById("tablebody");
let correctAnswers=0;
let wrongAnswers=0;
let resultP=document.getElementById('result-p');
let videoCongrats=document.getElementById('video');
let finalResult=document.getElementById('finalResult');
/*To get username */


/*To get the correct answers */
function GetJsDataFromLocalStorage(){//to recive the locale storage value

    /*To get username */
    let storageDataUserInfo=localStorage.getItem('regData');
    let userinfo=JSON.parse(storageDataUserInfo);
    console.log(userinfo);

    /* To get the counter of correct answers*/
    let storageData=localStorage.getItem('userAnswers');
    let parseData=JSON.parse(storageData); //store the correct answers counter

    /* To get the user's answers*/
    let storageDataAnswers=localStorage.getItem('userQuizAnswers'); // for user answers
    let parseDataAnswers=JSON.parse(storageDataAnswers);

    /* To get the quiz array*/
    let storageQuizArray=localStorage.getItem('jsArray'); // for user answers
    let parseJsArray=JSON.parse(storageQuizArray);

    renderInformation(parseData,parseDataAnswers,userinfo,parseJsArray);
}
GetJsDataFromLocalStorage();

function renderInformation(parseData,parseDataAnswers,userinfo,parseJsArray){

    let correctQuizAnswers=[2,1,3,2,3,1,3,1,2,3]; //The correct Html quiz answers
    let question=[
        'How to you select an element based on its css class?',
        'How to write an IF statement in JavaScript?',
        'How do you declare a JavaScript variabble?',
        'Is it necessary for the external script file to contain a script tag?',
        'Which built-in method calls a function for each element in the array?',
        `Which built-in method returns the string representation of the number's value?`,
        `Which of the following function of String object splits a String object into an array of strings by separating the string into substrings?`,
        `Which of the following function of String object returns the calling string value converted to upper case?`,
        `Which of the following function of Array object adds one or more elements to the end of an array and returns the new length of the array?`,
        `Which of the following function of Boolean object returns the primitive value of the Boolean object?`
    ]
    let anwers=[
        `querySelector`,
        `if(i==5)`,
        `let carName`,
        `No`,
        `forEach()`,
        `toString()`,
        `split()`,
        `toUpperCase()`,
        `push()`,
        `valueOf()`
    ]
    for (let i=0;i<correctQuizAnswers.length;i++){
    
        /*To add a row and cells with the questions number and true ot false value depends on the user answers */
      let tr=document.createElement('tr');
      let td1=document.createElement('td');
      let td2=document.createElement('td');
      let td3=document.createElement('td');
      let td4=document.createElement('td');
      let td5=document.createElement('td');
      tableBody.appendChild(tr);
      td5.style.fontWeight="bold";
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
        td4.innerHTML=parseJsArray[i].choises[parseDataAnswers[i]-1];
        td5.innerHTML ="true";
        correctAnswers=correctAnswers+1;
        console.log(correctAnswers);
        td5.style.color='#75d375';
        
        }
        else{
        td1.innerHTML = i+1;
        td2.innerHTML=question[i];
        td3.innerHTML=anwers[i];
        td4.innerHTML=parseJsArray[i].choises[parseDataAnswers[i]-1];
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