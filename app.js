const dropDown = document.querySelector('.drop-down');
const menu = dropDown.querySelector('.menu');
const companyLink = dropDown.querySelector('a');
const sidebar = document.querySelector('.nav-links-container');
const mobileMenu = document.querySelector('.mobile-menu');

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


const slides = document.querySelectorAll('.slide')
const indicators = document.querySelectorAll('.indicator');

function nextImage() {
    const currentSlide = [ ...slides].find(slide => slide.classList.contains('visible'));
    const currentIndex = [ ...slides].indexOf(currentSlide);
    
    if (currentIndex === slides.length - 1) {
        slides[0].classList.add('visible');
        indicators[0].classList.add('selected');
    } else {
        slides[currentIndex + 1].classList.add('visible');
        indicators[currentIndex + 1].classList.add('selected');
    }
    indicators[currentIndex].classList.remove('selected');
    currentSlide.classList.remove('visible');
}

function previousImage() {
    const currentSlide = [ ...slides].find(slide => slide.classList.contains('visible'));
    const currentIndex = [ ...slides].indexOf(currentSlide);

    if (currentIndex === 0) {
        slides[slides.length - 1].classList.add('visible');
        indicators[slides.length - 1].classList.add('selected');
    } else {
        slides[currentIndex - 1].classList.add('visible');
        indicators[currentIndex - 1].classList.add('selected');
    }
    indicators[currentIndex].classList.remove('selected');
    currentSlide.classList.remove('visible');
}

const nextBtn = document.getElementById('right-arrow');
nextBtn.addEventListener('click', nextImage);

const previousBtn = document.getElementById('left-arrow');
previousBtn.addEventListener('click', previousImage);

indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
        const currentSlide = [ ...slides].find(slide => slide.classList.contains('visible'));
        const currentIndex = [ ...slides].indexOf(currentSlide);
        const clickedIndex = [ ...indicators].indexOf(indicator);

        currentSlide.classList.remove('visible');
        indicators[currentIndex].classList.remove('selected');

        slides[clickedIndex].classList.add('visible');
        indicators[clickedIndex].classList.add('selected'); 
    })
});

