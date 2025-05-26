//this project is give knowldge about the usestate we can not change ui like in js we have to give the value to react lib ui to update the value and this is update the value in everywher in the app
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//use satate take two para meter first is the value taht we give by the difault and second is the a function that will update the value 
  const [counter, setCounter]=useState(15)

  //let counter=10
  const addvalue= () => {
    setCounter(counter + 1)
    //otherwise we can do it like this
    //counter = counter + 1
    //console.log(counter)
    //setCounter(counter + 1)
  }
  const removevalue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
     <h1>chai or me</h1>
     <h2>counter value:{counter}</h2>
     <button onClick={addvalue}>Add value</button>
     <br />
     <button onClick={removevalue} disabled={counter === 0}>remove value</button>
     
    </>
  )
}

export default App
