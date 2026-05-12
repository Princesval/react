// React
import { useState, useEffect } from "react"
import './App.css';

// 4 - custon hook
import { useFetch } from "./hooks/useFetch";

const url = "https://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([])

  // 4 - Custon hook
  const {data: items, httpConfig, loading } = useFetch(url);

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  // 1 - Resgatando dados

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url)

  //     const data = await res.json()

  //     setProducts(data)
  //   }
    
  //   fetchData();
  // }, []);

  // 2 - Add de produtos

  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product),
    })

    // 3 - Carregamento
    const addedProduct = await res.json()

    setProducts((prevProducts) > [...prevProducts, addedProduct]);

    setName("")
    setPrice("")
  };

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/* {6 - loading} */}
      {loading && <p>Carregando dados...</p>}
      {!loading && (
        <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - R$ {product.price}
          </li>
        ))}
      </ul>
      )}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)}/>
            <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)}/>
          </label>
          <input type="submit" value="Criar" />
        </form> 
      </div>
    </div>
  )
}

export default App