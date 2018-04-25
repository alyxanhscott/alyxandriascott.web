{
    const scrollToEl = (el) => {
        document.querySelector(el).scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
    };

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('.nav').children[0].addEventListener('click', () => scrollToEl('#projects'));
        document.querySelector('.nav').children[1].addEventListener('click', () => scrollToEl('#intro'));
        document.querySelector('.nav').children[2].addEventListener('click', () => scrollToEl('.Contact'));
    });
}