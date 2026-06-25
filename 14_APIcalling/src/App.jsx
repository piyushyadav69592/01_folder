import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data,setdata] = useState([])

  const getdata = async ()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    setdata(response.data)

  }

  return (
    <div>
      <button onClick={getdata}>get data</button>
      <div>
        {data.map(function(elem,idx){
          return <h2>hello {idx} and {elem.title} use id: {elem.id}</h2>
        })}
      </div>
    </div>
  )
}

export default App
