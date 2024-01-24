import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <a className="img" target="_blank">
          <img src='/public/images.png' className="logo" />
        </a>
      </div>

      <nav className="menuHeader">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Vehículos</a></li>
          <li><a href="#">Ayuda</a></li>
          <li><a href="#">Contacto</a></li>
          <li><a href="#">Políticas</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;