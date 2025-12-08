const clickSound=document.getElementById("clickSound");
document.querySelectorAll("a, button").forEach(el=>{
    el.addEventListener("click",()=>{
        clickSound.currentTime=0;
        clickSound.play();
    });
});
