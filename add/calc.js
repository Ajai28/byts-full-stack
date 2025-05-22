let x=document.getElementById("number-1");
let y=document.getElementById("number-2");
function add(){
    let res=parseInt(x.value)+parseInt(y.value);
    document.getElementById('result').innerText=`Result is ${res}`
}
function sub(){
    let res=parseInt(x.value)-parseInt(y.value);
    document.getElementById('result').innerText=`Result is ${res}`
}
function div(){
    let res=parseInt(x.value)/parseInt(y.value);
    document.getElementById('result').innerText=`Result is ${res}`
}
function mul(){
    let res=parseInt(x.value)*parseInt(y.value);
    document.getElementById('result').innerText=`Result is ${res}`
}
function mod(){
    let res=parseInt(x.value)%parseInt(y.value);
    document.getElementById('result').innerText=`Result is ${res}`
}