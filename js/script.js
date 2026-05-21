const text = "Cloud & DevOps Engineer";
const typing = document.getElementById("typing");

let i = 0;

function typeEffect() {
  if (i < text.length) {
    typing.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}

window.onload = typeEffect;
