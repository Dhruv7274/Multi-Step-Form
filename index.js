var form1=document.querySelector(".form1");
var form2=document.querySelector(".form2");
var form3=document.querySelector(".form3");

var next1=document.querySelector("#next1Btn");
var next2=document.querySelector("#next2Btn");

var back1=document.querySelector("#back1Btn");
var back2=document.querySelector("#back2Btn");

var progressBar=document.querySelector(".progressbar");


next1.onclick=function(){
    form1.style.left="-480px"
    progressBar.style.width="240px"
    form2.style.left="0"
}

next2.onclick=function(){
    form2.style.left="-480px"
    progressBar.style.width="360px"
    form3.style.left="0"
}

back1.onclick=function(){
    form1.style.left="0px"
    progressBar.style.width="120px"
    form2.style.left="480px"
}

back2.onclick=function(){
    form2.style.left="0px"
    progressBar.style.width="240px"
    form3.style.left="480px"
}