const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const body = document.body

let activeSlide = 0;

rightBtn.addEventListener("click", () => {
    activeSlide++;

    if(activeSlide > slides.length -1){
        activeSlide = 0;
    }

    setBg();
    setActiveSlide();

})

leftBtn.addEventListener("click", () => {
    activeSlide--;

    if(activeSlide < 0){
        activeSlide = slides.length - 1;
    }

    setBg();
    setActiveSlide();
})

setBg();
function setBg() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
    slides.forEach((slide) => slide.classList.remove('active'))
  
    slides[activeSlide].classList.add('active')
  }