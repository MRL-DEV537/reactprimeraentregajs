import React from 'react';
import CartWidget from '../components/CartWidget';
import ItemListContainer from './ItemListContainer';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-k fixed-top w-100">
      <div className='d-flex'>
      <Link className="navbar-brand" to="/">Shoes Store</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/productos/buzos">Buzos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/productos/remeras">Remeras</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/productos/pantalones">Pantalones</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/productos/medias">Medias</Link>
          </li>
          <li className="nav-item">
          <CartWidget itemCount={3} />
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
};

export default NavBar;