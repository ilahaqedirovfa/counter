const minusClas=document.querySelector(".minus");
const plusClas=document.querySelector(".plus");
const zeroClas=document.querySelector(".zero");
const resetBtn=document.querySelector(".reset");


let start=0;

plusClas.addEventListener("click", function(){
  start++;
  zeroClas.innerHTML=start;

});

minusClas.addEventListener("click", function(){
    start--;
    zeroClas.innerHTML=start;
});

resetBtn.addEventListener("click", function(){
    start=0;
    zeroClas.innerHTML=start;
    
});