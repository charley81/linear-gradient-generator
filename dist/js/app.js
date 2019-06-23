// UI Vars
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const text = document.getElementById('syntax');
const bodyColor = document.getElementById('bodyColor');

// On DOM load
window.addEventListener('DOMContentLoaded', () => {
  bodyColor.style.background = `linear-gradient(to right, ${color1.value}, ${
    color2.value
  })`;

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

// Event listeners
color1.addEventListener('input', getColor);
color2.addEventListener('input', getColor);
