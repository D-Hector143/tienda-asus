import React, { useState } from 'react';
import './Carrito.css';

const Carrito = () => {
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: 'Laptop ASUS TUF F15',
      precio: 1200,
      imagen: 'https://dlcdnwebimgs.asus.com/gain/589eeb70-a1a6-4d83-b70e-65fc0c8f5f75/',
      cantidad: 1
    },
    {
      id: 2,
      nombre: 'Teclado ASUS ROG',
      precio: 100,
      imagen: 'https://www.asus.com/media/Odin/Websites/global/ProductLine/20201105093151.png',
      cantidad: 1
    }
  ]);


  const eliminarProducto = (id) => {
    setProductos(productos.filter((producto) => producto.id !== id));
  };


  const calcularTotal = () => {
    return productos.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
  };

  return (
    <div className="carrito-container">
      <h1>Tu Carrito de Compras</h1>

      <div className="carrito-productos">
        {productos.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          productos.map((producto) => (
            <div key={producto.id} className="producto">
              <div className="producto-info">
                <img src={producto.imagen} alt={producto.nombre} />
                <div>
                  <h2>{producto.nombre}</h2>
                  <p>${producto.precio}</p>
                  <p>Cantidad: {producto.cantidad}</p>
                </div>
              </div>
              <button className="eliminar-btn" onClick={() => eliminarProducto(producto.id)}>
                Eliminar
              </button>
            </div>
          ))
        )}
      </div>

      <div className="carrito-resumen">
        <div className="total">
          <h3>Total:</h3>
          <p>${calcularTotal()}</p>
        </div>

        <div className="botones">
          <button className="seguir-comprando">Seguir Comprando</button>
          <button className="proceder-pago">Proceder al Pago</button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
