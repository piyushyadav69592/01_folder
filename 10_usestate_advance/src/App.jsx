import React, { useState } from 'react'

const App = () => {
  const [num,setNum]  = useState([0,])
   
  const handleClick = ()=>{
    const newNum = [...num]
    newNum.push(newNum.length + 1)
    setNum(newNum)
    
  }

  return (
    <div>
      <h1>Number is a {num}</h1>
      <button onClick={handleClick}>click</button>
    </div>
  )
}

export default App