let score=0;
let cross=true;
let gamfinish=new Audio("gameover1.wav")
let toe=new Audio("jump.wav");
const scores=document.querySelector(".score")
console.log(scores.innerText)
const diano=document.getElementById("box1");
const dragon=document.getElementById("box2");
const gameOver=document.querySelector(".gameover");
const reset=document.querySelector(".button")
window.addEventListener("keydown", (e) => {
    toe.play();
    let keyValue=e.keyCode;
    
     if(keyValue===38)
    {
         diano.classList.add("ani")
         setTimeout(()=>{

             diano.classList.remove("ani")
         },1000)
    }
     if(keyValue===39)
    { let dinoX=parseInt(window.getComputedStyle(diano,null).getPropertyValue("left"));
    diano.style.left=dinoX+112+"px";
    }
     if(keyValue===37)
    { let dinoX=parseInt(window.getComputedStyle(diano,null).getPropertyValue("left"));
    diano.style.left=dinoX-112+"px";
    }
})
setInterval(()=>{
  dx=parseInt(window.getComputedStyle(diano,null).getPropertyValue("right"));
  dy=parseInt(window.getComputedStyle(diano,null).getPropertyValue("top"));
  ox=parseInt(window.getComputedStyle(dragon,null).getPropertyValue("right"));
  oy=parseInt(window.getComputedStyle(dragon,null).getPropertyValue("top"));
    OffsetX=Math.abs(dx-ox);
   OffsetY=Math.abs(dy-oy);
if(OffsetX<300 && OffsetY<55)
{ 
    gameOver.style.display="block";
    dragon.classList.remove("ani-dragon");
    reset.style.display="block";
    gamfinish.play();
}
else if((OffsetX<300) && cross){
        console.log("Hurray")
        console.log("hurray")
        score+=1;
        updatescore(score);
        cross=false;
        setTimeout(() => {
            cross=true;
            
        },1000);
    }
    function updatescore(score){
        scores.innerText=`Your Score:${score}`
        
    }
    
    
},100);

reset.addEventListener("click",()=>{
    dragon.classList.add("ani-dragon")
    gameOver.style.display="none";
    reset.style.display="none";
    score=0;
    scores.innerText=`Your Score:${score}`
    
})

