function fn(x){
    const li = document.getElementsByTagName('a');
    for(let i=0;i<5;i++){
        if(x === (i+1)){
            li[i].className = "click";
        }else{
            li[i].className = "";
        }
    }
}