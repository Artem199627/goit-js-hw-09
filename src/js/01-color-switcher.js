
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.body;
 let timerId;

btnStart.addEventListener("click", renderBackgroundColor);
btnStop.addEventListener("click", () => {
    clearInterval(timerId);
    btnStart.toggleAttribute("disabled");
});

function renderBackgroundColor()  {
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    btnStart.toggleAttribute("disabled");
}

 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
