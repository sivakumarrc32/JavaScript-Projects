const clock=document.querySelector('.clock');


function runClock(){
    var currentTime = new Date();
    var hr=currentTime.getHours();
    var min = currentTime.getMinutes();
    var sec = currentTime.getSeconds();
    var txt = "AM";
    if(hr > 12)
    {
        hr=hr-12;
        txt="PM";
    } 
    else if(hr === 0){
        hr = 12;
        txt ="AM";
    }
    hr=hr<10 ? "0"+hr :hr;
    min=min<10 ? "0"+min :min;
    sec=sec<10 ? "0"+sec :sec;
    clock.innerHTML=`${hr} : ${min} : ${sec} ${txt}`;
}
runClock();
setInterval(runClock,1000);