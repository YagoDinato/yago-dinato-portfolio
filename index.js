const words = ["Estudante de ADS", "Téc Instrumentista"];
const element = document.getElementById("rotatorWord");
const cursor = document.getElementById("rotatorCursor");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

// Lógica de digitação das palavras
function typeEffect() {
  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    element.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    element.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentWord.length) {
    speed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 500;
  }

  setTimeout(typeEffect, speed);
}

// Faz o cursor piscar alternando a classe utilitária do Bootstrap
setInterval(() => {
  cursor.classList.toggle("opacity-0");
}, 400);

typeEffect();