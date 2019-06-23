const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const text = document.getElementById('syntax');
const bodyColor = document.getElementById('bodyColor');

function getColor() {
  bodyColor.style.background = `linear-gradient(to right, ${color1.value}, ${
    color2.value
  })`;
}

color1.addEventListener('input', getColor);
color2.addEventListener('input', getColor);
