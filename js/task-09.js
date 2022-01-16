function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanRef = document.querySelector('.color');
const buttonFef = document.querySelector('.change-color');

function changesBackgroundColorOfBody() {
 document.body.style.backgroundColor = `${getRandomHexColor()}`;
 spanRef.textContent = `${getRandomHexColor()}`;
}

buttonFef.addEventListener("click", () => {
  changesBackgroundColorOfBody()
});


