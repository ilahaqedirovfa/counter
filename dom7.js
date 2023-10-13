// const circle = document.querySelector(".pink-circle");
// const btn = document.querySelector(".purple-buton");

// let counter = 0;

// btn.addEventListener("click", function () {
//   if (counter === 0) {
//     circle.setAttribute("style", "margin-left: 92%");
//     counter++;
//   } else {
//     circle.setAttribute("style", "margin-left: 1%");
//     counter--;
//   }
// });

// btn.addEventListener("click", function(){
//     circle.style.backgroundColor="yellow"
    
// })








const circle=document.querySelector(".pink-circle");
const purpleButon=document.querySelector(".purple-buton");

let counter=0;


purpleButon.addEventListener("click", function(){
  if(counter===0){
    counter++;
    circle.setAttribute("style", "margin-left:92%");
   
  }else{
    counter--;
    circle.setAttribute("style", "margin-left:1%");
    
  }
});

purpleButon.addEventListener("click", function(){
  circle.style.backgroundColor="pink"
});





