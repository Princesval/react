
function Button() {

    // let count = 0;

    // const  handleClick = (name) => {
    //     if (count < 3) {
    //         count++;
    //         console.log(`${name} clicou em mim ${count} vezes`)
    //     } else {
    //         console.log(`${name} PARE DE CLICAR`)
    //     }
    // }

    const handleClick = (e) => e.target.textContent = "OUCH!";

    return(
        <button className="button" onClick={(e) => handleClick(e)}>Click me</button>
    );
}

export default Button