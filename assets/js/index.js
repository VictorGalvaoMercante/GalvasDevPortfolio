
const texto = "OLÁ, SOU VICTOR GALVÃO.";
const elemento = document.querySelector(".digitando");
const toggle = document.getElementById('menuToggle');
const links = document.querySelector('.links');
const menuLinks = document.querySelectorAll('.links a');

let i = 0;

function digitar() {
  if (i < texto.length) {
    elemento.innerHTML += texto.charAt(i);
    i++;
    setTimeout(digitar, 100);
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

const isAppleMobile = /iPhone|iPad|iPod/i.test(navigator.userAgent);

if (isAppleMobile) {

  const elementosComBlock = document.querySelectorAll('.block');
  const elementosComBlockRight = document.querySelectorAll('.blockRight');


  elementosComBlock.forEach(el => el.classList.remove('block'));
  elementosComBlockRight.forEach(el => el.classList.remove('blockRight'));
}

