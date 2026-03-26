import React, {useState} from 'react';

function MyComponent(){

    /* useState (onClick)
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("SpongeBob");
    }

    const incrementAge = () => {
        setAge(age+ 1);
    }

    const toggleStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return(<div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set name</button>

                <p>Age: {age}</p>
                <button onClick={incrementAge}>Increment age</button>

                <p>Is employed? {isEmployed ? "Yes" : "No"}</p>
                <button onClick={toggleStatus}>Toggle status</button>
            </div>
    ); */

    /* useState(onChange)
    const [name, setName] = useState(""); 

    function handleName(event) {
        setName(event.target.value);
    }

    return(
        <div>
            <input value={name} onChange={handleName}/>
            <p>Name: {name}</p>
        </div>
    ); */

    const [count, setCount] = useState(0);

    const increment = () => { // Arrow function atuliza o valor atual de count em cada iteração 
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    const dencrement = () => { // Isso NÃO funciona porque o React contabiliza todos os count ainda como o valor original
        setCount(count - 1);
        setCount(count - 1);
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

export default MyComponent