import { useState } from 'react'

// import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
     <div className='w-full h-screen' 
     style={{ backgroundColor:color }}></div>
     <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 bg-black-100 py-3 rounded-xl'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-black p-3 rounded-2xl'>
        <button
          onClick={() => setColor("red")}
         className='outline-none px-4
         text-white rounded-full shadow-lg'
         style={{ backgroundColor: "red"}}
         >Red</button>

        <button
          onClick={() => setColor("blue")}
         className='outline-none px-4
         text-white rounded-full shadow-lg'
         style={{ backgroundColor: "blue"}}
         >Blue</button>
        <button
          onClick={() => setColor("green")}
         className='outline-none px-4
         text-white rounded-full shadow-lg'
         style={{ backgroundColor: "green"}}
         >Green</button>
        <button
          onClick={() => setColor("purple")}
         className='outline-none px-4
         text-white rounded-full shadow-lg'
         style={{ backgroundColor: "purple"}}
         >Purple</button>
        <button
          onClick={() => setColor("#DFFF00")}
         className='outline-none px-4
         text-white rounded-full shadow-lg'
         style={{ backgroundColor: " #DFFF00"}}
         >Chartreuse Yellow</button>
        <button
          onClick={() => setColor("#FFBF00")}
         className='outline-none px-4
         text-white rounded-full shadow-lg'
         style={{ backgroundColor: " #FFBF00"}}
         >golden Yellow</button>
      </div>
     </div>
    </>
  )
}

export default App
