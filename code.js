const opening = document.querySelectorAll(".members")
const closes = document.querySelectorAll(".GB")
opening.forEach((element,index) =>element.addEventListener("click",function(){
 opening[index].classList.toggle("down")
    
} ) );
