var currentTime=document.querySelector("#currentTime");

setInterval(function(){
    currentTime.innerText=dayjs().format("dddd MM/DD/YYYY hh:mm:ss");
},1000);

