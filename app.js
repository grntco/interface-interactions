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

const sidebar = document.querySelector('.nav-links-container');
const mobileMenu = document.querySelector('.mobile-menu');

function toggleSidebar() {
   if (sidebar.classList.contains('collapsed')) {
    sidebar.classList.remove('collapsed');
    mobileMenu.classList.add('expanded');
   } else {
    sidebar.classList.add('collapsed');
    mobileMenu.classList.remove('expanded');
   }
}

mobileMenu.addEventListener('click', toggleSidebar);

dropDown.addEventListener('mouseover', activateDropDown);
dropDown.addEventListener('mouseout', disableDropDown);
