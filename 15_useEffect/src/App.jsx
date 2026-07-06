import React, { useEffect } from 'react'
import { useState } from 'react'


const App = () => {
 
  const [a,setA] = useState(0) 
  const [b,setB] = useState(0)

  function achange() {
    console.log("A ki value change ho gayi hai")
  }
  function bchange() {
    console.log("B ki value change ho gayi hai")
  }

  useEffect(function(){
    achange()
    bchange()
    // console.log("useeffect is running ....")
  },[b])

  return (
    <div>
      <h1>num A {a}</h1>
      <h1>num A {b}</h1>
    <button onClick={()=>{
      setA(a+1)
    }}>change A</button>
    <button onClick={()=>{
      setB(b-1)
    }}>change B</button>
    </div>
  )
}

export default App