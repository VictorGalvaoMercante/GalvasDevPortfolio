
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

const isAppleMobile = /iPhone|iPad|iPod/i.test(navigator.userAgent);

document.addEventListener('DOMContentLoaded', () => {
  const blocks = document.querySelectorAll('.block');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        // Opcional: parar de observar depois que apareceu
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.4 // 40% visível = parecido com "entry cover 40%"
  });

  blocks.forEach(block => observer.observe(block));
});
