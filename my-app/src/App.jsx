import "./app.css";
import Card from "./Card"
import Counter from "./Counter";






const App = () =>{
  
  return <div className="container">
    <h1>Todo List</h1>
    <div className="unos">
      <input type="text" />
      <button>Submit</button>
    </div>
    
    <Card />
    <Card />

    <Counter />




    
   
  </div>
}

export default App;