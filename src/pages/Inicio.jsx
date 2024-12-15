import React from "react";
import './Inicio.css'

const Inicio=() => {
    return (
        <div className='fondo'>
            <div className='img'>
                <img src="https://dlcdnwebimgs.asus.com/files/media/7307645F-321A-46F8-8DED-BEA6BFC2A968/v1/img/gaming/bg-gaming.jpg" alt="" />
            </div>
            <div className='logo-rog'>
                  <img src="/public/img/rog.png" alt="" />
            </div>
            <div className='text-asus'>
              <p>En ASUS Gaming Store, llevamos tu experiencia de juego al siguiente nivel. Diseñamos productos que combinan tecnología de vanguardia con un diseño futurista y detalles RGB que iluminan cada partida.
                Explora nuestra selección de laptops gaming, componentes de alto rendimiento y accesorios que no solo destacan por su potencia, sino también por su estilo. Nuestra misión es ofrecerte herramientas que te permitan superar tus límites, ya sea en el mundo del gaming competitivo, el streaming o la creación de contenido.
              </p>
            </div>
        </div>
    );
    
}

export default Inicio