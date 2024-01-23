import React from 'react'

const Header =() => {
        return (
            <>
               <header id="root">
                <div className="logo-container">
                  <a  target="_blank">
                    <img src='/public/images.png' className="logo"  />
                  </a>
                </div>
                </header>
                
                <nav>
                  <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Vehículos</a></li>
                    <li><a href="#">Ayuda</a></li>
                    <li><a href="#">Contacto</a></li>
                    <li><a href="#">Políticas</a></li>
                  </ul>
                </nav>
            </>
    );
}

export default Header;