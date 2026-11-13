// Carrito: de momento solo cuenta los productos añadidos
let productosCarrito = [];

const contador = document.getElementById('contador');
const carrito = document.getElementById('carrito');
const botones = document.querySelectorAll('.btn-anadir');

function actualizarContador() {
  contador.textContent = productosCarrito.length;

  
  if (productosCarrito.length > 0) {
    contador.classList.add('visible');
  } else {
    contador.classList.remove('visible');
  }


}

botones.forEach(function (boton) {
  boton.addEventListener('click', function () {
    productosCarrito.push({
      nombre: boton.dataset.nombre,
      precio: parseFloat(boton.dataset.precio),
    });
    actualizarContador();
  });
});
