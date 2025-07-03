let productos = JSON.parse(localStorage.getItem('carrito')) ;

const form = document.getElementById('form-producto');
const contenedor = document.getElementById('carrito-container');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const precio = parseFloat(document.getElementById('precio').value);
  const cantidad = parseInt(document.getElementById('cantidad').value);

  if (!nombre || isNaN(precio) || isNaN(cantidad)) return;

  const nuevoProducto = { nombre, precio, cantidad };
  productos.push(nuevoProducto);
  localStorage.setItem('carrito', JSON.stringify(productos));
  CargarProdcutos();
  form.reset();
});

function CargarProdcutos() {
  contenedor.innerHTML = '';
  productos.forEach((prod, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <h3>${prod.nombre}</h3>
      <p>Precio: $${prod.precio}</p>
      <p>Cantidad: ${prod.cantidad}</p>
      <button onclick="eliminarProducto(${index})">Eliminar</button>
    `;
    contenedor.appendChild(card);
  });
}

function eliminarProducto(index) {
  productos.splice(index, 1);
  localStorage.setItem('carrito', JSON.stringify(productos));
  CargarProdcutos();
}

window.addEventListener('DOMContentLoaded', CargarProdcutos);