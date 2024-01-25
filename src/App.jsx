import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import Header from './feactures/components/Header'
import Card from './feactures/components/Card'
import { Layout } from './feactures/components/Layout'
import './App.css'
import FiltroBusqueda from './feactures/components/FiltroBusqueda'

const App = () => {
  const [count, setCount] = useState(0)

 

  return (
    <>
    <div>
      <Header />
    </div>
    <div>
        <FiltroBusqueda/>
    </div>
      <Layout>
        <div>
              <Card />
        </div>
      </Layout>

      <footer>
        <p>&copy; 2024 Tu Página Dinámica. Todos los derechos reservados.</p>
      </footer>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App