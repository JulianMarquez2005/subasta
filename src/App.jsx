import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import Header from './feactures/components/Header'
import Card from './feactures/components/Card'
import { Layout } from './feactures/components/Layout'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <article>
        <Layout>
          <Card />
        </Layout>
      </article>

      <footer>
        <p>&copy; 2024 Tu Página Dinámica. Todos los derechos reservados.</p>
      </footer>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App