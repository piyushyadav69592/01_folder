import React, { useState } from 'react'

const App = () => {

  const [a, setA] = useState(0);
  const [b, setB] = useState("piyush");

  function handleClick() {
    setA(a + 1)
    console.log("clicked", a)
    setB("piyush  yadav")
  }

  const [dec, setDec] = useState(0)

  function drecrement() {
    setDec(dec - 1)
  }
  function inecrement() {
    setDec(dec + 1)
  }
  function jumpbyfive(){
    setDec(dec + 5)
  }

  return (
    <div>
      <h3>value is a  {a}</h3>
      <h3>username is b  {b}</h3>
      <button onClick={handleClick} >click me</button>
      <hr />
      <h2>increment and decrement project {dec}</h2>
      <button onClick={inecrement}>increment</button>
      <button onClick={drecrement}>decrement</button>
      <button onClick={jumpbyfive}>increase five</button>

    </div>
  )
}

export default App;