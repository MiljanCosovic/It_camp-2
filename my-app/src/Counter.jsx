import { useState } from "react";
const Counter = () =>{
    const [counter, setCounter] = useState(0);
    return (<div>
        
    <div className="d">
    <button onClick={() =>{
      setCounter(counter - 1);
      console.log(counter);

    }}>-1</button>
    <h1>{counter}</h1>


    <button onClick={() =>{
      setCounter(counter + 1);
      console.log(counter);

    }}>+1</button>




</div>
    </div>)
}


export default Counter;