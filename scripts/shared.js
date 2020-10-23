const mobileNavBtn = document.querySelector('.fa-bars');
const mobileMainNav = document.querySelector('.mobile-main-nav');
const dropDownBtn = document.querySelector('.mobile');
const dropDownContent = document.querySelector('.mobile-content');

function displayMobileNav() {
	mobileMainNav.classList.toggle('display-flex');
}

function dropdownTest() {
	dropDownContent.classList.toggle('display-block');
}

mobileNavBtn.addEventListener('click', displayMobileNav);
dropDownBtn.addEventListener('click', dropdownTest);
