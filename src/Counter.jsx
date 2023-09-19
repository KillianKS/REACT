import { useState } from "react"
import './Counter.css'
function Counter(){
    const [count, setCount] = useState(0)

    function increment(){
        setCount(curr => curr + 1)
        
    }
    function decrement(){
        setCount(curr => curr - 1)
    }

    return (
        <div className="counter">
            <button onClick={()=>increment()}>+</button>
            <button onClick={()=>decrement()}>-</button>

            <p>Count : {count}</p>
        </div>
    );
}

export default Counter;