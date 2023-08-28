const dropDownLink = document.querySelector('.drop-down-link');
const dropDownMenu = document.querySelector('.drop-down-menu');
const companyLink = dropDownLink.querySelector('a');

function activateDropDown() {
    companyLink.innerHTML = 'Company<i class="fa-solid fa-angle-up"></i>'
    dropDownMenu.classList.add('visible');
}

function disableDropDown() {
    companyLink.innerHTML = 'Company<i class="fa-solid fa-angle-down"></i>'
    dropDownMenu.classList.remove('visible');
}

dropDownLink.addEventListener('mouseover', activateDropDown);
dropDownLink.addEventListener('mouseout', disableDropDown);
