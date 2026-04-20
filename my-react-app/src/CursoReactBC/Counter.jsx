import React, {useState} from 'react';

function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const dencrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <div>
            <p>Counter: {count}</p>
            <br />
            <button onClick={increment}>+</button>
            <button onClick={dencrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>

    )
}

export default Counter