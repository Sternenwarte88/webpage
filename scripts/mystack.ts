const mainStackBtn = document.getElementById('Main-Stack-Button') as HTMLButtonElement;
const frontendButton = document.getElementById('Frontend-Button') as HTMLButtonElement;
const backendButton = document.getElementById('Backend-Button') as HTMLButtonElement;
const overallButton = document.getElementById('Overall-Button') as HTMLButtonElement;

const mainStackBox: HTMLDivElement = document.querySelector('.my-stack__gridbox') as HTMLDivElement;
const frontendBox: HTMLDivElement = document.querySelector('.frontend__gridbox') as HTMLDivElement;
const backendBox: HTMLDivElement = document.querySelector('.backend__gridbox') as HTMLDivElement;
const overallBox: HTMLDivElement = document.querySelector('.overall__gridbox') as HTMLDivElement;

mainStackBox.setAttribute('main-stack', 'true');
frontendBox.setAttribute('frontend', 'true');
backendBox.setAttribute('backend', 'true');
overallBox.setAttribute('overall', 'true');

const actionBox: HTMLDivElement[] = [mainStackBox, frontendBox, backendBox, overallBox];
const addActiveTransitionTimeout:number[] = [];
const removeActiveTransistionTimeout:number[] = [];
function displayBtnHandler (field: string) {
  while (addActiveTransitionTimeout.length > 1) {
    clearTimeout(addActiveTransitionTimeout[1]);
    addActiveTransitionTimeout.splice(1, 1);
  }
  while (removeActiveTransistionTimeout.length > 1) {
    clearTimeout(removeActiveTransistionTimeout[1]);
    removeActiveTransistionTimeout.splice(1, 1);
  }
  actionBox.forEach(box => {
    if (box.hasAttribute(field)) {
      const addTransitionTimeout = setTimeout(() => {
        box.querySelector('.transitionbox')?.classList.add('transition-animation');
      }, 1000);
      box.classList.add('active');
      addActiveTransitionTimeout.push(addTransitionTimeout);
    } else {
      box.querySelector('.transitionbox')?.classList.remove('transition-animation');
      const addRemoveTimeout = setTimeout(() => {
        box.classList.remove('active');
      }, 500);
      removeActiveTransistionTimeout.push(addRemoveTimeout);
    }
  });
}

mainStackBtn.addEventListener('click', () => { displayBtnHandler('main-stack'); });
frontendButton.addEventListener('click', () => { displayBtnHandler('frontend'); });
backendButton.addEventListener('click', () => { displayBtnHandler('backend'); });
overallButton.addEventListener('click', () => { displayBtnHandler('overall'); });
