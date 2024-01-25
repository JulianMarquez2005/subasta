import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import Header from './feactures/components/Header'
import Card from './feactures/components/Card'
import { Layout } from './feactures/components/Layout'
import './App.css'
import FiltroBusqueda from './feactures/components/FiltroBusqueda'
import CardMenu from './feactures/components/CardMenu'

const App = () => {
  const [count, setCount] = useState(0)

 

  return (
    <>
    <div>
      <Header />
    </div>
    <main className='h-full mt-18'>
      <section className="h-full ">
        <div>
            <FiltroBusqueda/>
        </div>
        <div>
            <CardMenu/>
        </div>
      </section>
      
      <Layout>
        <div>
              <Card />
        </div>
      </Layout>
      
    </main>
    

      <footer>
        <p>&copy; 2024 Tu Página Dinámica. Todos los derechos reservados.</p>
      </footer>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App