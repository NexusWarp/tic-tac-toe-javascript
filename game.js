let xTurn = true;

document.querySelector("#one").addEventListener("click", function clicked(){
    getClick(".x1")
    document.querySelector("#one").removeEventListener("click",clicked)
})

document.querySelector("#two").addEventListener("click", function clicked(){
    getClick(".x2")
    document.querySelector("#two").removeEventListener("click",clicked)
})
document.querySelector("#three").addEventListener("click", function clicked(){
    getClick(".x3")
    document.querySelector("#three").removeEventListener("click",clicked)
})
document.querySelector("#four").addEventListener("click", function clicked(){
    getClick(".x4")
    document.querySelector("#four").removeEventListener("click",clicked)
})
document.querySelector("#five").addEventListener("click", function clicked(){
    getClick(".x5")
    document.querySelector("#five").removeEventListener("click",clicked)
})
document.querySelector("#six").addEventListener("click", function clicked(){
    getClick(".x6")
    document.querySelector("#six").removeEventListener("click",clicked)
})
document.querySelector("#seven").addEventListener("click", function clicked(){
    getClick(".x7")
    document.querySelector("#seven").removeEventListener("click",clicked)
})
document.querySelector("#eight").addEventListener("click", function clicked(){
    getClick(".x8")
    document.querySelector("#eight").removeEventListener("click",clicked)
})
document.querySelector("#nine").addEventListener("click", function clicked(){
    getClick(".x9")
    document.querySelector("#nine").removeEventListener("click",clicked)
})

let someoneWon = false;

function getClick(per){
   if(someoneWon==false){
    let select = document.querySelector(per)
    if(xTurn==true){
        select.innerHTML="X"
        xTurn=false;
        document.querySelector(".text").innerHTML="Player 2 Turn!"
       }
       else{
         select.innerHTML="O"
         xTurn=true;
         document.querySelector(".text").innerHTML="Player 1 Turn!"
       }
   }
    if( (document.querySelector(".x1").textContent=="X") && (document.querySelector(".x2").textContent=="X") && (document.querySelector(".x3").textContent=="X")){
        checkCondition("1");
    }
    if( (document.querySelector(".x4").textContent=="X") && (document.querySelector(".x5").textContent=="X") && (document.querySelector(".x6").textContent=="X")){
        checkCondition("1");
    }
    if( (document.querySelector(".x7").textContent=="X") && (document.querySelector(".x8").textContent=="X") && (document.querySelector(".x9").textContent=="X")){
        checkCondition("1");
    }
    if( (document.querySelector(".x1").textContent=="X") && (document.querySelector(".x4").textContent=="X") && (document.querySelector(".x7").textContent=="X")){
        checkCondition("1");
    }
    if( (document.querySelector(".x2").textContent=="X") && (document.querySelector(".x5").textContent=="X") && (document.querySelector(".x8").textContent=="X")){
        checkCondition("1");
    }
    if( (document.querySelector(".x3").textContent=="X") && (document.querySelector(".x6").textContent=="X") && (document.querySelector(".x9").textContent=="X")){
        checkCondition("1");
    }
    if( (document.querySelector(".x1").textContent=="X") && (document.querySelector(".x5").textContent=="X") && (document.querySelector(".x9").textContent=="X")){
        checkCondition("1");
    }
    if( (document.querySelector(".x3").textContent=="X") && (document.querySelector(".x5").textContent=="X") && (document.querySelector(".x7").textContent=="X")){
        checkCondition("1");
    }
    
    if( (document.querySelector(".x1").textContent=="O") && (document.querySelector(".x2").textContent=="O") && (document.querySelector(".x3").textContent=="O")){
        checkCondition("2");
    }
    if( (document.querySelector(".x4").textContent=="O") && (document.querySelector(".x5").textContent=="O") && (document.querySelector(".x6").textContent=="O")){
        checkCondition("2");
    }
    if( (document.querySelector(".x7").textContent=="O") && (document.querySelector(".x8").textContent=="O") && (document.querySelector(".x9").textContent=="O")){
        checkCondition("2");
    }
    if( (document.querySelector(".x1").textContent=="O") && (document.querySelector(".x4").textContent=="O") && (document.querySelector(".x7").textContent=="O")){
        checkCondition("2");
    }
    if( (document.querySelector(".x2").textContent=="O") && (document.querySelector(".x5").textContent=="O") && (document.querySelector(".x8").textContent=="O")){
        checkCondition("2");
    }
    if( (document.querySelector(".x3").textContent=="O") && (document.querySelector(".x6").textContent=="O") && (document.querySelector(".x9").textContent=="O")){
        checkCondition("2");
    }
    if( (document.querySelector(".x1").textContent=="O") && (document.querySelector(".x5").textContent=="O") && (document.querySelector(".x9").textContent=="O")){
        checkCondition("2");
    }
    if( (document.querySelector(".x3").textContent=="O") && (document.querySelector(".x5").textContent=="O") && (document.querySelector(".x7").textContent=="O")){
        checkCondition("2");
    }
} 
"1"
function checkCondition(player){
    document.querySelector(".text").innerHTML=`Player ${player} Won!!!`;
    someoneWon=true;
}
document.querySelector(".text").innerHTML="Player 1 Turn!"
