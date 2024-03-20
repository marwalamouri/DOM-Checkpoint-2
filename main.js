let colorBox = document.getElementById("color-box");
  let btn = document.getElementById("change-color-btn");
// document.addEventListener("DOMContentLoaded", (event) => { 
//   console.log("DOM loaded");
// });


const randColor = () =>  {
  return "#" + Math.floor(Math.random()*16777215).toString(16).toUpperCase();
}

console.log(randColor());


btn.addEventListener('click',function(){
  colorBox.style.backgroundColor=randColor()
});
