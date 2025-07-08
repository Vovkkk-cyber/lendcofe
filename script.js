
const navButtons = document.querySelectorAll('.nav__button')
    
for(let i = 0; i < navButtons.length; i++){
  navButtons[i].onclick = function(){
    [...navButtons].forEach((el) => el.classList.remove('active'));
    this.classList.add('active')
  }
}

const buttons = document.querySelector('.nav');
const panels = document.querySelectorAll('.panel');
buttons.addEventListener('click', handleClick);
function handleClick(e) {
  if (e.target.matches('button')) {
    panels.forEach(panel => panel.classList.remove('show'));
    const { id } = e.target.dataset;
    const selector = `.panel[id="${id}"]`;
    document.querySelector(selector).classList.add('show');
  }
}