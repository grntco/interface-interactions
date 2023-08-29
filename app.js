const dropDown = document.querySelector('.drop-down');
const menu = document.querySelector('.menu');
const companyLink = dropDown.querySelector('a');
const sidebar = document.querySelector('.nav-links-container');
const mobileMenu = document.querySelector('.mobile-menu');

// function activateDropDown() {
//     companyLink.innerHTML = 'Company<i class="fa-solid fa-angle-up"></i>'
//     menu.classList.add('visible');
// }

// function disableDropDown() {
//     companyLink.innerHTML = 'Company<i class="fa-solid fa-angle-down"></i>'
//     menu.classList.remove('visible');
// }

function toggleDropDown() {
    if (menu.classList.contains('visible')) {
        companyLink.innerHTML = 'Company<i class="fa-solid fa-angle-down"></i>'
        menu.classList.remove('visible');
    } else {
        companyLink.innerHTML = 'Company<i class="fa-solid fa-angle-up"></i>'
        menu.classList.add('visible');
    }
}

function toggleSidebar() {
   if (sidebar.classList.contains('collapsed')) {
    sidebar.classList.remove('collapsed');
    mobileMenu.classList.add('expanded');
   } else {
    sidebar.classList.add('collapsed');
    mobileMenu.classList.remove('expanded');
   }
}

dropDown.addEventListener('mouseover', toggleDropDown);
dropDown.addEventListener('mouseout', toggleDropDown);
mobileMenu.addEventListener('click', toggleSidebar);
