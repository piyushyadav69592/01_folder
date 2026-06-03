import Card from "./components/card.jsx";

function App() {
  
  return (
  <div className="container">
    <Card user="piyush" age={19} img="https://images.unsplash.com/photo-1601315488950-3b5047998b38?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Card>
    <Card user="john" age={25} img="https://images.unsplash.com/photo-1730641883961-97678de3ecd7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Card>
    <Card user="jane" age={30} img="https://images.unsplash.com/photo-1653549892896-dde02867edee?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Card>
    <Card user="bob" age={35} img="https://images.unsplash.com/photo-1631576114512-b99e43faff40?q=80&w=939&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Card>
  </div>
  )
}

export default App
