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



function getClick(per){
    if(xTurn==true){
        document.querySelector(per).innerHTML="X"
        xTurn=false;
        document.querySelector(".text").innerHTML="Player 2 Turn!"
       }
       else{
         document.querySelector(per).innerHTML="O"
         xTurn=true;
         document.querySelector(".text").innerHTML="Player 1 Turn!"
       }   
}

document.querySelector(".text").innerHTML="Player 1 Turn!"
