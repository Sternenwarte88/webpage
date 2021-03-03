const mainStackBtn = document.getElementById('Main-Stack-Button') as HTMLButtonElement;
const frontendButton = document.getElementById('Frontend-Button') as HTMLButtonElement;
const backendButton = document.getElementById('Backend-Button') as HTMLButtonElement;
const overallButton = document.getElementById('Overall-Button') as HTMLButtonElement;

const mainStackBox: HTMLDivElement = document.querySelector('.my-stack__gridbox') as HTMLDivElement;

mainStackBox.setAttribute('main-stack', 'true');

const actionBox: HTMLDivElement[] = [mainStackBox];

function displayBtnHandler (field: string) {
  actionBox.forEach(box => {
    if (box.hasAttribute(field)) {
      box.style.display = 'grid';
    } else {
      box.style.display = 'none';
    }
  });
}

mainStackBtn.addEventListener('click', () => { displayBtnHandler('main-stack'); });
frontendButton.addEventListener('click', () => { displayBtnHandler(''); });
backendButton.addEventListener('click', () => { displayBtnHandler(''); });
overallButton.addEventListener('click', () => { displayBtnHandler(''); });
