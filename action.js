// javascript code goes here
let start=document.querySelector("#start");
let pause=document.querySelector("#pause");
let stop=document.querySelector("#stop");

let time=document.querySelector("#time");

start.addEventListener("click",()=>{
   start.disabled=true;
    pause.disabled= false;
    stop.disabled=false;  
})

let flag= true;
pause.addEventListener("click",()=>{
    if(flag===true){
        flag=false;
        pause.innerHTML="Continue";
    }else{
         flag= true;
          pause.innerHTML="pause";
    }
})
let sec=00;
let minute=00;
let hour=00;
let a;
start.addEventListener("click",()=>{
    a=setInterval(x,1000);
});

let pasueflag=false;
pause.addEventListener("click",()=>{
    if(pasueflag===false){
        clearInterval(a);
        pasueflag=true;
    }else{
        a=setInterval(x,1000);
        pasueflag=false;
    }
})

stop.addEventListener("click",()=>{
    clearInterval(a);
    sec=0;
    minute=0;
    hour=0;
    time.innerHTML=`0${hour}:0${minute}:0${sec}`;
    start.disabled=false;
    pause.disabled= true;
    stop.disabled=true; 
    pause.innerHTML="pause"; 
})

 let x=function(){
    sec++;
    if(sec===60){
        sec=0;
        minute++;
    }
    if(minute===60){
        minute=0;
        hour++;
    }
    let H = hour < 10 ? "0" + hour : hour;
    let M = minute < 10 ? "0" + minute : minute;
    let S = sec < 10 ? "0" + sec : sec;
    time.innerHTML = `${H}:${M}:${S}`;
};