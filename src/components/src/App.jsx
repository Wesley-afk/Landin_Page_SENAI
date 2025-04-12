import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    // Desenvolver a lanPage do SENAI com bootstrap :)
    <>
      <div>
          <NavBar/>
      </div>
    </>
  )
}

export default App
