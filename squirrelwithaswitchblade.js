let currtime = 10;


for(let i=0;i<=10000;i+=1000){
    setTimeout(CountDown, i);  
}


function CountDown(){
    if(currtime == 0){
        document.getElementById("countDown").innerHTML = "Blastoff!";    
    }else if(currtime != 0){
        document.getElementById("countDown").innerHTML = currtime + " seconds";
    }
    currtime -= 1;
}