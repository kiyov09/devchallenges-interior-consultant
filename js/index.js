const navCont = document.querySelector('.navigation-container');

const menuIcon = document.querySelector('.menu');
const closeIcon = document.querySelector('.close');

let activeLink = document.querySelector('li.active');

const links = document.querySelector('.links');

links.addEventListener('click', (e) => {
    const element = e.target;

    if (element.classList.contains('link') === false) return;

    activeLink.classList.remove('active');
    element.classList.add('active');
    activeLink = element;

    navCont.classList.remove('active');
})

menuIcon.addEventListener('click', () => {
    navCont.classList.add('active');
});

closeIcon.addEventListener('click', () => {
    navCont.classList.remove('active');
});
