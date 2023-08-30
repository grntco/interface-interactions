// Global variables

const dropDown = document.querySelector('.drop-down');
const menu = dropDown.querySelector('.menu');
const companyLink = dropDown.querySelector('a');
const sidebar = document.querySelector('.nav-links-container');
const mobileMenu = document.querySelector('.mobile-menu');
const slides = [ ...document.querySelectorAll('.slide')]
const indicators = [ ...document.querySelectorAll('.indicator')];
const nextBtn = document.getElementById('right-arrow');
const previousBtn = document.getElementById('left-arrow');

// Functions

function toggleDropDown() {
    if (menu.classList.contains('expanded')) {
        companyLink.innerHTML = 'Company<i class="fa-solid fa-angle-down"></i>'
        menu.classList.remove('expanded');
    } else {
        companyLink.innerHTML = 'Company<i class="fa-solid fa-angle-up"></i>'
        menu.classList.add('expanded');
    }
}

function toggleSidebar() {
   if (sidebar.classList.contains('collapsed')) {
    sidebar.classList.remove('collapsed');
    mobileMenu.classList.add('expanded');
   } else {
    if (menu.classList.contains('expanded')) toggleDropDown();
    sidebar.classList.add('collapsed');
    mobileMenu.classList.remove('expanded');
   }
}

function moveToSlide(targetSlide) {
    const currentSlide = document.querySelector('.visible')
    const currentIndicator = indicators[slides.indexOf(currentSlide)];
    const targetIndicator = indicators[slides.indexOf(targetSlide)];

    currentSlide.classList.remove('visible');
    currentIndicator.classList.remove('selected');
    targetSlide.classList.add('visible');
    targetIndicator.classList.add('selected');
}

function nextImage() {
    const currentSlide = document.querySelector('.visible');
    const nextSlide = currentSlide.nextElementSibling || slides[0];
    moveToSlide(nextSlide);
}

function previousImage() {
    const currentSlide = document.querySelector('.visible');
    const previousSlide = currentSlide.previousElementSibling || slides[slides.length - 1];
    moveToSlide(previousSlide);
}

// Events

dropDown.addEventListener('mouseover', () => {
    if (window.innerWidth > 1024) toggleDropDown();
});
dropDown.addEventListener('mouseout', () => {
    if (window.innerWidth > 1024) toggleDropDown();
});
dropDown.addEventListener('click', () => {
    if (window.innerWidth <= 1024) toggleDropDown();
})

mobileMenu.addEventListener('click', toggleSidebar);

nextBtn.addEventListener('click', nextImage);

previousBtn.addEventListener('click', previousImage);

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        moveToSlide(slides[index]);
    });
});

setInterval(nextImage, 5000);

