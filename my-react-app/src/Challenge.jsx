const Challenge = () => {

    const a = 10

    const b = 15

    function handleclick() {
        console.log(a + b)
    }

    return(
        <div>
            <div>
                <button onClick={handleclick}>Clique aqui</button>
            </div>
        </div>
    );
}

export default Challenge