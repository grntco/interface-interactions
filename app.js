const dropDown = document.querySelector('.drop-down');
const menu = document.querySelector('.menu');
const companyLink = dropDown.querySelector('a');

function activateDropDown() {
    companyLink.innerHTML = 'Company<i class="fa-solid fa-angle-up"></i>'
    menu.classList.add('visible');
}

function disableDropDown() {
    companyLink.innerHTML = 'Company<i class="fa-solid fa-angle-down"></i>'
    menu.classList.remove('visible');
}

dropDown.addEventListener('mouseover', activateDropDown);
dropDown.addEventListener('mouseout', disableDropDown);
