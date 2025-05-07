
const texto = "OLÁ, SOU VICTOR GALVÃO.";
const elemento = document.querySelector(".digitando");

let i = 0;

const toggle = document.getElementById('menuToggle');
const links = document.querySelector('.links');
const menuLinks = document.querySelectorAll('.links a');
function digitar() {
  if (i < texto.length) {
    elemento.innerHTML += texto.charAt(i);
    i++;
    setTimeout(digitar, 100); // velocidade da digitação
  }
}

window.onload = digitar;


toggle.addEventListener('click', () => {
  links.classList.toggle('active');
});


menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    links.classList.remove('active');
  });
});

// Detecta se é um dispositivo Apple móvel
const isAppleMobile = /iPhone|iPad|iPod/i.test(navigator.userAgent);

if (isAppleMobile) {
  // Seleciona todos os elementos com a classe "block"
  const elementosComBlock = document.querySelectorAll('.block');

  // Remove a classe "block" de cada um
  elementosComBlock.forEach(el => el.classList.remove('block'));
}

