import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './comonents/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-500 text-black'>test tailwind</h1>
    <Card btnTest="visit us" />
    <Card name="hero" btnTest="click me" />
    <Card />
    </>
  )
}

export default App
