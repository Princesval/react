import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";

const Product = () => {
    // 4 - rota dinâmica
    const { id } = useParams();

    // 5 - carregamento do dado individual
    const url = 'http://localhost:3000/products/' + id;
    const { data: product, loading, erro } = useFetch(url)

  return (
    <>
        <p>ID do produto: {id}</p>
        {erro && <p>Ocorreu um erro...</p>}
        {loading && <p>Carregando...</p>}
        {product && (
            <div>
                <h1>{product.name}</h1>
                <p>R${product.price}</p>
            </div>
        )}
    </>
  )
}

export default Product