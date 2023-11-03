window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const navlinks = document.querySelector('.nav-links');
    const nav = document.querySelector('nav');
    
    let headerheight = header.clientHeight;
    let navheight = window.innerHeight - headerheight;

    const hamburger = document.getElementById('hamburger-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('menu-expanded');
        // navlinks.classList.toggle('hide');
        nav.classList.toggle('open');
        header.style.height = `${headerheight}px`;
        if (nav.classList.contains('open')) {
            nav.style.height = `${navheight}px`;
            nav.style.maxHeight = `${navheight}px`;
            navlinks.classList.toggle('hide');
            
        }
        else {
            setTimeout(() => {
                navlinks.classList.toggle('hide');
            }, 400);
            nav.style.maxHeight = '0';
        }
    });


    const dates = Array.from(document.querySelectorAll(".date"));
    const slides = Array.from(document.querySelectorAll(".slide"));
    // default slide
    slides[dates.length -1].classList.remove('hide');
    dates.forEach((date) => {
        let dateID = date.textContent;
        date.addEventListener('click', () => {
            slides.forEach((slide) => {
                slide.classList.add('hide');
            });
            document.getElementById(dateID).classList.remove('hide');
        });
        
    });
    
});