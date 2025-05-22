let hour=0;
let min=0;
let sec=0;
let timer=null;
var start = () => {

     timer = setInterval(()=>{
        sec++;
        document.getElementById("sec").innerText=sec;
    if (sec > 59) {
        sec=0;
        min++;
        document.getElementById("min").innerText = min;
    }
    if (min > 59) {
        sec=0;
        min=0;
        hour++;
        document.getElementById("hour").innerText = hour;
        
    }
    
}, 1000);

}

let stop =() => {
    clearInterval(timer);
    
}

let reset = ()=> {
    clearInterval(timer);
    timer = null;
    hour=0;
    min=0;
    sec=0;
    document.getElementById("hour").innerText='00';
    document.getElementById("min").innerText='00';
    document.getElementById("sec").innerText='00';
}