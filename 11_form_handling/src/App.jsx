import React from 'react'
import { useState } from 'react'

const App = () => {
  const submitHndler = (e) => {
    e.preventDefault()
    console.log("form submtter",name)

  }
  const [name, setName] = useState("")

  const handlerChange = (e) =>{
    setName(e.target.value)
  }

  return (
    <div>
      <form onSubmit={submitHndler}>
        <input type="text" value={name} onChange={handlerChange} placeholder="Enter your name" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App;