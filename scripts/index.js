const modalBtn = document.querySelector('.modal__button');
const modalBackdrop = document.querySelector('.modal__backdrop')

modalBtn.addEventListener('click', () => {
    modalBackdrop.style.display = "none";
})