import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <div>
      <nav>
        <div className="logo"><img src="/public/img/asus.png" alt="" /></div>

        <ul>
          <li>
            <Link to="Inicio">Inicio</Link>
          </li>
          <li>
            <Link to="Productos">Productos</Link>
          </li>
          <li>
            <Link to="Accesorios">Accesorios</Link>
          </li>
          <li>
            <Link to="Nosotros">Nosotros</Link>
          </li>
          <li>
            <Link to="Contacto">Contacto</Link>
          </li>
          <li>
            <Link to="Carrito">Carrito</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Nav;
