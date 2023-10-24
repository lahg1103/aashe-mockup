window.addEventListener('DOMContentLoaded', () => {
    let navHeight = document.querySelector('nav').clientHeight;
    let landing = document.querySelector('#landing');
    landing.style.height = `${100 - (navHeight / window.innerHeight) * 100}vh`;
})