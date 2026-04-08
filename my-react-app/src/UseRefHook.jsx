import React, {useState, useEffect, useRef} from "react";

/* useRef não e-renderiza quando um valor muda
1. Acessando e interagindo com elementos do DOM
2. Lidando com Focus, Animations e Transitions
3. Lidanod com Timers e Intervals
*/
function UseRefHook() {

    const ref = useRef(0);

    const inputRef = useRef(null);

    useEffect(() => {
        console.log("Component rendered")
    });

    function handleClick(){
        ref.current = ref.current + 1
        // ref.current++;

        inputRef.current.style.backgroundColor = "yellow";
    }

    return(
        <>
        <div>
            <button onClick={handleClick}>Click Me</button>
            <input ref={inputRef}/>
        </div>
        </>
    );
}

export default UseRefHook