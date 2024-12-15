import React from 'react';
import './Accesorios.css';

const Accesorios = () => {
  return (
    <div className="accesorios-container">
      <h1>Accesorios ASUS Gaming</h1>
      <p>Potencia tu experiencia gaming con nuestros accesorios premium.</p>

      <div className="accesorios-grid">

        <div className="accesorio">
          <img src="https://dlcdnwebimgs.asus.com/gain/28EFE950-BAD3-4B17-9C43-05F86CA7B6B5" alt="Auriculares ROG" />
          <h2>Auriculares ROG</h2>
          <p>Disfruta de una calidad de sonido envolvente con la tecnología de sonido 7.1.</p>
          <button className="btn-agregar">Agregar al carrito</button>
        </div>

        <div className="accesorio">
          <img src="https://dlcdnwebimgs.asus.com/gain/3EA735C8-F1BA-46D4-ABF5-AB6819D93912" alt="Mouse ROG" />
          <h2>Mouse ROG</h2>
          <p>Diseñado para la precisión en cada movimiento, con iluminación RGB personalizable.</p>
          <button className="btn-agregar">Agregar al carrito</button>
        </div>

        <div className="accesorio">
          <img src="https://dlcdnwebimgs.asus.com/gain/BAA03A74-6267-44B5-BFC7-22136E9AF51D" alt="Teclado ROG" />
          <h2>Teclado ROG</h2>
          <p>Comodidad y velocidad con teclas mecánicas para un rendimiento sin igual.</p>
          <button className="btn-agregar">Agregar al carrito</button>
        </div>

        <div className="accesorio">
          <img src="https://dlcdnwebimgs.asus.com/gain/65C15086-C7A6-448E-BC62-C0AD411F8E9E/w717/h525" alt="Alfombrilla ROG" />
          <h2>Mochila Rog</h2>
          <p>¿Te gustaría adaptar el texto de otra manera o prefieres enfatizar algún aspecto específico del producto?</p>
          <button className="btn-agregar">Agregar al carrito</button>
        </div>

        <div className="accesorio">
          <img src="https://dlcdnwebimgs.asus.com/gain/0BA0EF94-9712-4136-9E93-4D3F3C02048A/w717/h525" alt="Silla ROG" />
          <h2>Silla ROG</h2>
          <p>Comodidad y soporte para largas horas de juego con diseño ergonómico.</p>
          <button className="btn-agregar">Agregar al carrito</button>
        </div>

        <div className="accesorio">
          <img src="https://rog.asus.com/websites/global/productcustomizedTab/8101/img/lineup/6.png" alt="Monitor ROG" />
          <h2>Alfombrilla Rog</h2>
          <p>Optimiza tu control y deslizamiento con una superficie antideslizante y duradera.</p>
          <button className="btn-agregar">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Accesorios;
