import React from 'react';
import './Contacto.css';

const Contacto = () => {
  return (
    <div className="contacto-container">
      <div className="contacto-header">
        <h1>Contáctanos</h1>
        <p>
          ¿Tienes alguna duda o necesitas más información sobre nuestros productos y servicios? ¡Estamos aquí para ayudarte!
          Rellena el formulario o contacta con nosotros a través de las opciones a continuación.
        </p>
      </div>

      <div className="contacto-info">
        <div className="contacto-info-item">
          <h2>Dirección</h2>
          <p>1234 Calle Ficticia, Ciudad del Futuro, País</p>
        </div>
        <div className="contacto-info-item">
          <h2>Teléfono</h2>
          <p>+123 456 7890</p>
        </div>
        <div className="contacto-info-item">
          <h2>Email</h2>
          <p>contacto@asus.com</p>
        </div>
      </div>
      <div className="contacto-form">
        <h2>Envíanos un mensaje</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" placeholder="Tu nombre" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" placeholder="Tu correo electrónico" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" placeholder="Tu mensaje" required></textarea>
          </div>
          <button type="submit" className="submit-button">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
