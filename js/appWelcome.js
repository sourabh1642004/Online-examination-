'use strict';
let userName=document.getElementById('user_name');
let welcomeP=document.getElementById('welcome-p');
let quizButton=document.getElementById(`let's-go`);

function GetDataFromLovalStorage(){
    let storageData=localStorage.getItem('regData');
    let parseData=JSON.parse(storageData);
    console.log(parseData);
    renderInformation(parseData)
}
GetDataFromLovalStorage()

function renderInformation(parseData){
    welcomeP.innerHTML='';
    parseData.map(function(i){
        console.log(i.selectList);
        // to change the user name in welcome page
        userName.innerHTML= ` ${i.fname}` + ' '+ `${i.lname}`;
        // To change the welcom description and buton target
        if(i.selectList=='HTML'){
            welcomeP.innerHTML=`Welcome to OPQ Form!
            The test is not official, it's just a nice way to see how much you know, or don't know, about HTML.
            When the test starts,you will have 3 minutes to complete.`;
            quizButton.href='./Quizes/html/htmlQuiz.html'; // you have to check from the link
        }
        else if (i.selectList=='CSS'){
            welcomeP.innerHTML=`Welcome to OPQ Form!
            The test is not official, it's just a nice way to see how much you know, or don't know, about CSS.
            When the test starts,you will have 3 minutes to complete.`;
            quizButton.href='./Quizes/css/cssQuiz.html'; //// you have to check from the link
        }
        else if (i.selectList=='JavaScript'){
            welcomeP.innerHTML=`Welcome to OPQ Form!
            The test is not official, it's just a nice way to see how much you know, or don't know, about JavaScript.
            When the test starts,you will have 3 minutes to complete.`;
            quizButton.href='./Quizes/js/jsQuiz.html';//// you have to check from the link
        }
    })
}