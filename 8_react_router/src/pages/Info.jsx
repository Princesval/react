import { useParams } from "react-router-dom"

const Info = () => {
    const { id } = useParams()

  return (
    <div>
        <h1>Mais informações sobre o produto: {id}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus nemo in excepturi odio, beatae nobis magnam, inventore incidunt recusandae quia exercitationem tempore illum non, quidem modi laborum voluptatum deleniti odit?</p>
    </div>
  )
}

export default Info