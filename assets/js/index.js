
const texto = "OLÁ, SOU VICTOR GALVÃO.";
const elemento = document.querySelector(".digitando");

let i = 0;

function digitar() {
  if (i < texto.length) {
    elemento.innerHTML += texto.charAt(i);
    i++;
    setTimeout(digitar, 100); // velocidade da digitação
  }
}

window.onload = digitar;



const toggle = document.getElementById('menuToggle');
const links = document.querySelector('.links');
const menuLinks = document.querySelectorAll('.links a'); // Pega todos os links dentro do menu

// Ao clicar no toggle, abre ou fecha o menu
toggle.addEventListener('click', () => {
  links.classList.toggle('active');
});

// Adiciona evento de clique em cada link para fechar o menu
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    links.classList.remove('active');
  });
});


const blocks = document.querySelectorAll('.block');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

blocks.forEach(block => observer.observe(block));
