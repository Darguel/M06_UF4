import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TascaLista from '../components/tascaLista'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TascaLista>
      </TascaLista>
    </>
  )
}

export default App
