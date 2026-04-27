import { useState } from "react"

const ConditionalRender = () => {

    const [x] = useState(true);

    const [name] = useState("João");

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se X for T, sim</p>}
        {!x && <p>Se X for F, sim</p>}
        {name === "João" ? 
        (<div>O nome é: {name}</div>) 
        : 
        (<div>Nome não encontrado</div>)
        }
    </div>
  )
}

export default ConditionalRender