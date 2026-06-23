import React from 'react'

const App = () => {
  
  const user1 = {
    username: "piyush",
    age: 19,
    city: "salon"
  }
   
  localStorage.setItem("user1",JSON.stringify(user1))
  const user2 = JSON.parse(localStorage.getItem("user1"))
  console.log(user2)


  return (
    <div>App</div>
  )
}

export default App