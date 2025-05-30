import React from 'react'

function InputBox() {
      return (
            <div>
                  <input type="text" placeholder="Enter amount" />
                  <select>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                  </select>
            </div>
      )
}

export default InputBox
