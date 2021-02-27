const mobileNavBtn: HTMLElement = document.querySelector(
  '.fa-bars'
) as HTMLElement;
const mobileMainNav: HTMLElement = document.querySelector(
  '.mobile-main-nav'
) as HTMLElement;
const dropDownBtn: HTMLElement = document.querySelector(
  '.mobile'
) as HTMLElement;
const dropDownContent: HTMLElement = document.querySelector(
  '.mobile-content'
) as HTMLElement;
const closeDropDown: HTMLElement = document.getElementById(
  'nav_close'
) as HTMLElement;

function displayMobileNav() {
  mobileMainNav.classList.toggle('display-flex');
}

function dropdownTest() {
  dropDownContent.classList.toggle('display-block');
}

function navClose() {
  if (dropDownContent.classList.contains('display-block')) {
    mobileMainNav.classList.remove('display-flex');
    dropDownContent.classList.remove('display-block');
  } else if (
    !dropDownContent.classList.contains('displayblock') &&
    mobileMainNav.classList.contains('display-flex')
  ) {
    mobileMainNav.classList.remove('display-flex');
  }
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../sw.js');
}

mobileNavBtn.addEventListener('click', displayMobileNav);
dropDownBtn.addEventListener('click', dropdownTest);
closeDropDown.addEventListener('click', navClose);
