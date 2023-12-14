import React from 'react';
import CartWidget from '../components/CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-k fixed-top w-100">
      <div className='d-flex'>
      <a className="navbar-brand" href="/">Shoes Store</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/productos">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contacto">Contacto</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="#"><CartWidget/></a>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
};

export default NavBar;