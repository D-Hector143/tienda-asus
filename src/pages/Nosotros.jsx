import React from 'react';
import './Nosotros.css'; // Asegúrate de tener un archivo CSS adecuado

const Nosotros = () => {
  return (
    <div className="nosotros-container">
      <div className="nosotros-header">
        <h1>Quiénes Somos</h1>
        <p>Conoce nuestra historia, misión y visión, y cómo trabajamos para ofrecer lo mejor en tecnología y gaming.</p>
      </div>

      <div className="nosotros-sections">
        <div className="nosotros-section historia">
          <img src="https://gamers-on.com/wp-content/uploads/2024/04/30-anos-asus.png" alt="Nuestra historia" className="nosotros-image" />
          <div className="section-text">
            <h2>Nuestra Historia</h2>
            <p>
              Desde nuestros primeros días en la industria, nos hemos enfocado en transformar la tecnología en algo accesible y
              revolucionario. Creemos que la innovación debe ser constante, y es por eso que cada uno de nuestros productos está
              diseñado para brindar lo mejor en rendimiento y calidad.
            </p>
          </div>
        </div>

        <div className="nosotros-section mision">
          <img src="https://www.yankodesign.com/images/design_news/2023/01/asus-spatial-vision-offers-creators-a-glasses-free-3d-experience/asus-spatial-vision-5.jpeg" alt="Nuestra misión" className="nosotros-image" />
          <div className="section-text">
            <h2>Nuestra Misión</h2>
            <p>
              Nuestro objetivo es ofrecer productos que no solo cumplan con las expectativas, sino que las superen. Desde dispositivos
              de gaming de alto rendimiento hasta herramientas de trabajo que impulsan la productividad, nuestra misión es ser
              líderes en innovación.
            </p>
          </div>
        </div>

        <div className="nosotros-section vision">
          <img src="https://comunidadblogger.net/wp-content/uploads/2021/09/ROG-Citadel-XV.jpg" alt="Nuestra visión" className="nosotros-image" />
          <div className="section-text">
            <h2>Nuestra Visión</h2>
            <p>
              Queremos ser la marca líder en tecnología de gaming, innovando constantemente para ofrecer a nuestros usuarios una
              experiencia única y transformadora. Estamos comprometidos con el futuro y con ayudar a nuestros clientes a alcanzar
              su máximo potencial.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;

