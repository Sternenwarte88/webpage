const mobileNavBtn = document.querySelector(".mobile-nav");
const mobileMainNav = document.querySelector(".mobile-main-nav");

mobileNavBtn.addEventListener("click", displayMobileNav )

function displayMobileNav() {
    mobileMainNav.classList.toggle("display-inline-block")
}