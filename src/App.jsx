import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

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
      


      <section>
        <h1>+</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </section>



      <footer>
        <p>&copy; 2024 Tu Página Dinámica. Todos los derechos reservados.</p>
      </footer>
    </>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));

export default App