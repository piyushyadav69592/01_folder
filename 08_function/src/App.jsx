import React from 'react'

const App = () => {

  function inputhandler(elem){
    if(elem>0){
      console.log("shidha scrolling hai ")
    }else{
      console.log("ULTA scrolling")
    }
  }

  return (
    <div onWheel={(elem) => {
      inputhandler(elem.deltaY)
    }}>
     <div className="box1"></div>
     <div className="box2"></div>
     <div className="box3"></div>
    </div>
  )
}

export default App