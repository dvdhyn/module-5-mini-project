var currentTime=document.querySelector("#currentTime");

currentTime.innerText=dayjs().format("dddd MM/DD/YYYY hh:mm:ss");

setInterval(function(){
    currentTime.innerText=dayjs().format("dddd MM/DD/YYYY hh:mm:ss");
},1000);


