const hamburger = document.querySelector('.hamburger');
const main = document.querySelector('#main');
const slideMenu = document.querySelector('.slide-menu');
const body = document.getElementById('body');
const movePx = parseInt(slideMenu.offsetWidth);
console.log(movePx);
let menuOn = false;

hamburger.addEventListener('click', ()=>{
  if(!menuOn) {
    hamburger.classList.add('open');
    menuOn = true;
    slideOn();
  } else {
    hamburger.classList.remove('open');
    menuOn = false;
    slideOff();
  }
})

function slideOn(params) {
  main.style.right = "256px";
  body.style.overflow = "hidden";
}
function slideOff(params) {
  main.style.right = "0px";
  body.style.overflow = "auto";
}