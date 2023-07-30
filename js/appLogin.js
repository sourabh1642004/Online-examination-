
let Xemail=document.getElementById('loginEmail');
let Xpassword=document.getElementById('loginPassword');
'use strict';

console.log('hello')

function GetDataFromLovalStorage(){
    let storageData=localStorage.getItem('regData');
    let parseData=JSON.parse(storageData);
    console.log(parseData[0]);

   if (Xemail.value==parseData[0].femail){

   if (Xpassword.value==parseData[0].password){
        document.getElementById('submit').href='./welcome.html';
        console.log('TRUE');
        console.log('WRONG');
   }
   else 
    alert('Please Check that you inserted the correct password.');
  }
  else 
    alert('Please Check that you inserted the correct email');
}