import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    // Desenvolver a lanPage do SENAI com bootstrap :)
    <>
      <div>
          {/* <NavBar/> */}
          <Home/>
      </div>
    </>
  )
}

export default App
