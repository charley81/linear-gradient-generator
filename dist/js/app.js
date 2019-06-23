// UI Vars
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const text = document.getElementById('syntax');
const bodyColor = document.getElementById('bodyColor');
const btn = document.getElementById('btn');

// On DOM load
window.addEventListener('DOMContentLoaded', () => {
  // set background gradient
  bodyColor.style.background = `linear-gradient(to right, ${color1.value}, ${
    color2.value
  })`;

  // set text for gradient
  text.textContent = bodyColor.style.background;
});

// getColor
function getColor() {
  bodyColor.style.background = `linear-gradient(to right, ${color1.value}, ${
    color2.value
  })`;

  text.textContent = bodyColor.style.background;
}

// setText
function setText() {
  text.textContent = bodyColor.style.background;
}

// randomColor
function randomColor() {
  const a = '#' + ((Math.random() * 0xffffff) << 0).toString(16);
  const b = '#' + ((Math.random() * 0xffffff) << 0).toString(16);

  color1.value = a;
  color2.value = b;

  bodyColor.style.background = `linear-gradient(to right, ${a}, ${b})`;
}

// Event listeners
color1.addEventListener('input', getColor);
color2.addEventListener('input', getColor);
btn.addEventListener('click', randomColor);
