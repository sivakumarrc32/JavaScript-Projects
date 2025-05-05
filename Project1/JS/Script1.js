const days=document.querySelector("#days")

const hours=document.querySelector("#hours")

const minutes=document.querySelector("#minutes")

const seconds=document.querySelector("#seconds")


function result(){
    const currentYear = new Date().getFullYear();

    const resultDay = new Date(`January 1 ${currentYear+1} 00:00:00`)

    const currentDate = new Date()

    const dif=resultDay-currentDate;

    const d=Math.floor(dif/1000/60/60/24)

    const h=Math.floor((dif/1000/60/60)%24);

    const m=Math.floor((dif/1000/60)%60);

    const s=Math.floor((dif/1000)%60); 

    days.innerHTML=d<10 ? "0"+d : d;
    hours.innerHTML=h<10 ? '0'+h : h;
    minutes.innerHTML=m<10 ? '0'+m : m;
    seconds.innerHTML=s<10 ? '0'+s : s;
    // console.log(day +" "+ hours +" "+ minutes + " "+ seconds)
}

setInterval(result,1000)

