import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import './App.css'
import Header from './feactures/components/Header'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
      </div>
      <section>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
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