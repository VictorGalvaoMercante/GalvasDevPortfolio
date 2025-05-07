
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

// Detecta quando o elemento entra na tela
const elementos = document.querySelectorAll('.animar-scroll');

window.addEventListener('scroll', function () {
  elementos.forEach(function (elemento) {
    const rect = elemento.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      elemento.classList.add('show');
    }
  });
});

