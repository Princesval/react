/*
useEffect() = React Hook que diz ao React para fazer tal código quando:
                                                                        - Esse componente "re-renders"
                                                                        - Esse component "mounts" 
                                                                        - O Estado de um valor    

useEffect(function, [dependencies])

1. useEffect(() => {})                          // Roda a cada "re-render"
2. useEffect(() => {}, [])                      // Roda só qunado "mount"
3. useEffect(() => {}, [value])                 // Roda só quando "mount" + qunado o valor muda
*/
import React, {useState, useEffect} from 'react';

function ReactHook() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    /* 1 useEffect(() => {})  
    useEffect(() => {
        document.title = `Count ${count}`
    }); */

    /* 2 useEffect(() => {}, []) 
    useEffect(() => {
        document.title = `My Counter Program`
    }, []); */

    // 3 useEffect(() => {}, [value])
    useEffect(() => {
        document.title = `Count ${count}`
    }, [count]);

    function addCount() {
        setCount(c => c + 1);
    }

    function removeCount() {
        setCount(c => c - 1);
    }

    function changeColor() {
        setColor(c => c === "green" ? "red" : "green");
    }

    return(
        <>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={removeCount}>Remove</button> <br/>

            <p>Color: {color}</p>
            <button onClick={changeColor}>Change Color</button>
        </>
    );
}

export default ReactHook