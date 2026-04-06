import React, {useState, useEffect, useRef} from "react";

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