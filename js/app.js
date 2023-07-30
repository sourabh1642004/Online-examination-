'use strict';

let regFormx=document.getElementById('regs_form');
let firstName=document.getElementById('fname');
let lastName=document.getElementById('lname');
let nameLastError=document.getElementById('error-last-name');
let nameFirstError=document.getElementById('error-first-name');
let emailError=document.getElementById('error-email');
let passwordError=document.getElementById('error-password');
let regSubmitButton=document.getElementById('reg-submit-link');
let info=[];

/*LocalStorage */
function LocalStorageFrom(){
    let array=JSON.stringify(info);
    localStorage.setItem('regData',array);
}

/*Regestration Constructor */
function regForm(fname,lname,femail,semail,password,spassword,selectList){

this.fname=fname;
this.lname=lname;
this.femail=femail;
this.semail=semail;
this.password=password;
this.spassword=spassword;
this.selectList=selectList;
console.log(this.selectList);
this.firstName=userFirstName(this.fname);
this.lastName=userLastName(this.lname);
this.correctEmails=correctEmail(this.femail,this.semail);

this.correctPassword=checkPassword(this.password,this.spassword);

if(this.firstName && this.lastName && this.correctEmails && this.correctPassword){

info.push(this);
regSubmitButton.href='./login.html';

}
LocalStorageFrom()
console.log(this.fullName);


}

/*To return the full name */
function userFirstName(fname){
    nameFirstError.style.display='';
    let x;
    let regex = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;
    if ((regex.test(fname))){
        console.log('correct');
        return true;
    }
    else{
        nameFirstError.style.display='block';
        nameFirstError.innerHTML='Incorrect name! Your first name must contain letters only.';
        return false;
    }
}
function userLastName(lname){
    nameLastError.style.display='';
    let x;
    let regex = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;
    if ((regex.test(lname))){
        console.log('correct');
        return true;
    }
    else{
        nameLastError.style.display='block';
        nameLastError.innerHTML='Incorrect name! Your last name must contain letters only.';
        return false;
    }
}
/*To check from the femail */
function correctEmail(femail,semail){
    let regex=/(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

if ((!regex.test(femail)) && (!regex.test(semail)))
    {
      femailError.innerHTML= 'Incorrect Email!';
      return  false;
    }
    else{
        if (femail==semail){
             console.log('Email has been confirmed');
             emailError.innerHTML='';
             return true;
        }
        else{
            console.log(`Emails don't match`);
            emailError.innerHTML=`Emails don't match`;
            return true;
        }
    }   
  }

/*To check from password */
function checkPassword(password,spassword){
    passwordError.innerHTML='';
    let regex=/^(?=.*[a-z])(?=.*[A-Z])(?=(.*[\d]){2,})[A-Za-z\d?]{8,32}$/;
    let num=/[\d]{2,}/;
    let capital=/[A-Z]/;
    let symboles=/[#$@!%&*?]/;
    if ((regex.test(password))&& (regex.test(spassword))){ //To check from 2 passwords syntax
        console.log('password syntax is Incorrect');
        passwordError.style.display='block';
        passwordError.innerHTML= 'password syntax is Incorrect';
        return false;
        
    }
    else if((!capital.test(password[0])) && (!capital.test(spassword[0]))){ //To check from the first letter
        console.log( 'Incorrect! first letter must be capital, password must contain 2 numbers at least, password must contain  at least 1 character');
        passwordError.style.display='block';
        passwordError.innerHTML= 'Incorrect! first name must be capital, password must contain 2 numbers at least, password must contain  at least 1 character';
        return false;
    }
    else if((!num.test(password))&&(!num.test(spassword))){
        console.log('Your password must contain 2 numbers at least');
        passwordError.style.display='block';
        passwordError.innerHTML= 'You password must contain 2 numbers at least';
        return false;
    }
    else if((!symboles.test(password)) && !symboles.test(spassword)){
        console.log('Your password must contain  at least 1 character');
        passwordError.style.display='block';
        passwordError.innerHTML= 'You password must contain  at least 1 character';
        return false;
    }
    else if(password===spassword){
        console.log('password syntax is correct');
        console.log('The first name is capital');
        console.log( 'Passwords match');
        passwordError.style.display='none';
        return true;
    }else{
       passwordError.style.display='block';
       passwordError.innerHTML= `Passwords don't match or the length is incorrect (length must be more or equal than 8 and less than or equal 32`;
       return false;
    }
}
regFormx.addEventListener('submit', handelSubmit);
function handelSubmit(e){
    e.preventDefault();
    let fname=e.target.fname.value;
    let lname=e.target.lname.value;
    let femail=e.target.femail.value;
    let semail=e.target.semail.value;
    let password=e.target.password.value;
    let spassword=e.target.spassword.value;
    let selectList=e.target.selectList.value;
    new regForm(fname,lname,femail,semail,password,spassword,selectList); //Calling the constructor
    
}
handelSubmit();

/************************************************* */
