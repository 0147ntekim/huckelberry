const rightBtn = document.querySelector('.right');
const allImages = document.querySelectorAll('.pic');
const leftBtn = document.querySelector('.left');
const allBase = document.querySelectorAll('.base');
const auto = true;
const timer = 5000;
let autoSlide


rightBtn.addEventListener('click', () => {
    nextSlide()
    clearInterval(autoSlide)
    if(auto){
        autoSlide = setInterval(nextSlide, timer)
    } 
});
leftBtn.addEventListener('click', () => {
    previousSlide()
    clearInterval(autoSlide)
    if(auto){
        autoSlide = setInterval(previousSlide, timer)
    }
});

function nextSlide(){
    const current = document.querySelector('.current');
    const blu = document.querySelector('.blu');

    current.classList.remove('current');
    blu.classList.remove('blu');

    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current');;
    }
    else{
        allImages[0].classList.add('current');
    }

    if(blu.nextElementSibling){
        blu.nextElementSibling.classList.add('blu');;
    }
    else{
        allBase[0].classList.add('blu');
    }
}


function previousSlide(){
    const current = document.querySelector('.current');
    const blu = document.querySelector('.blu');

    current.classList.remove('current');
    blu.classList.remove('blu');

    if(current.previousElementSibling){
        current.previousElementSibling.classList.add('current');
    }
    else{
        allImages[7].classList.add('current');
    }

    if(blu.previousElementSibling){
        blu.previousElementSibling.classList.add('blu');
    }
    else{
        allBase[7].classList.add('blu');
    }
}