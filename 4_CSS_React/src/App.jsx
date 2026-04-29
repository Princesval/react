// App.jsx
import './App.css' 
import Challengecss from './components/Challengecss'

function App() {

  const cars = [
    {id: 1, brand:"Ferrari", model: "laFerrari", color:"Red"},
    {id: 2, brand:"Aston Martin", model: "vantage", color:"Green"},
    {id: 3, brand:"Lamborghini", model: "revuelto", color:"Orange"},
    {id: 4, brand:"Bugatti", model: "chiron", color:"Black"},
    {id: 5, brand:"Koenigsegg", model: "jesko", color:"Silver"},
  ]

  return (
    <>
     <div>
      <h1>CSS em React: Desafio</h1>
        {cars.map((car) => (
        <Challengecss key={car.id}  brand={car.brand} model={car.model} color={car.color}/>
      ))}
     </div>
    </>
  )
}

export default App
