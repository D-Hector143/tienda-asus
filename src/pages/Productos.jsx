import React from 'react';
import './Productos.css';

const Productos = () => {
  const productos = [
    {
      id: 1,
      nombre: 'Laptop ASUS ROG Strix G16',
      descripcion: 'Laptops gaming de alto rendimiento con gráficos avanzados.',
      imagen: 'https://dlcdnwebimgs.asus.com/files/media/7307645F-321A-46F8-8DED-BEA6BFC2A968/v1/img/performance/engine-pd.png',
      precio: '$1,499.99'
    },
    {
      id: 2,
      nombre: 'Teclado Mecánico ASUS ROG FALCHION ICE',
      descripcion: 'Teclado gaming con retroiluminación RGB y switches mecánicos.',
      imagen: 'https://dlcdnwebimgs.asus.com/gain/BAA03A74-6267-44B5-BFC7-22136E9AF51D',
      precio: '$129.99'
    },
    {
      id: 3,
      nombre: 'Auriculares ASUS ROG DELTA S',
      descripcion: 'Auriculares gaming con sonido envolvente y comodidad prolongada.',
      imagen: 'https://dlcdnwebimgs.asus.com/gain/28EFE950-BAD3-4B17-9C43-05F86CA7B6B5',
      precio: '$89.99'
    },
    {
      id: 4,
      nombre: 'Mouse ASUS ROG KERIS',
      descripcion: 'Mouse gaming con sensor óptico y botones personalizables.',
      imagen: 'https://dlcdnwebimgs.asus.com/gain/3EA735C8-F1BA-46D4-ABF5-AB6819D93912',
      precio: '$59.99'
    }
  ];

  return (
    <div className="productos-container">
      <h1>Productos ASUS Gaming</h1>
      <div className="productos-grid">
        {productos.map((producto) => (
          <div className="producto-card" key={producto.id}>
            <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
            <div className="producto-info">
              <h2>{producto.nombre}</h2>
              <p>{producto.descripcion}</p>
              <p className="producto-precio">{producto.precio}</p>
              <button className="btn-agregar">Agregar al carrito</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;
