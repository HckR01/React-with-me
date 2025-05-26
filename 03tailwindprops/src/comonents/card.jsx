import React from 'react'
// ahi pe bhi default value dia ja sak ta hey  card ke andar like name="..." or btnt=".."
function Card({name, btnTest}) {
      return (
            <div>
                  <h1>here i am {name} </h1>
                  <button className='bg-blue-500 text-white px-4 py-2 rounded'>{btnTest ||"visit me"}</button>
            </div>
      )
}

export default Card
