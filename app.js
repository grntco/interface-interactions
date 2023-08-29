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
