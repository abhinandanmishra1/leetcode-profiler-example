import './App.css'

import { Example } from './Example'
import reactLogo from './assets/react.svg'
import { useState } from 'react'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex flex-col min-h-screen'>
    <Example />
    </div>
    </>
  )
}

export default App
