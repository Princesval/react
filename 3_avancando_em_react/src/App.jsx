import ManageData from "./assets/componets/ManageData"
import ListRender from "./assets/componets/ListRender"
import ConditionalRender from "./assets/componets/ConditionalRender"
import ShowUserName from "./assets/componets/ShowUserName"
import CarDetails from "./assets/componets/CarDetails"
import Container from "./assets/componets/Container"
import ExecuteFunction from "./assets/componets/ExecuteFunction"
import UserDetails from "./assets/componets/UserDetails"

function App() {

  const cars = [
    {id: 1, brand:"Ford", color:"Blue", newCar: true, km:0},
    {id: 2, brand:"Lamborghini", color:"Yellow", newCar: true, km:0},
    {id: 3, brand:"Astin Martin", color:"Green", newCar: false, km:225000},
    {id: 4, brand:"BYD", color:"Gray", newCar: true, km:0},
  ]

  const pessoas = [
    {id: 1, nome:"Ana", idade:"62", profissao: "Médica",},
    {id: 2, nome:"Lúcio", idade:"22", profissao: "DJ",},
    {id: 3, nome:"Juno", idade:"19", profissao: "Astronauta",},
    {id: 4, nome:"Baptiste", idade:"32", profissao: "Fuzileiro"},
    {id: 5, nome:"Brigitte", idade:"17", profissao: "Engenheira"}
  ]

  function showMessage() {
    console.log("Evento do componente pai")
  }

  return (
    <>
      <h1>Seção 3</h1>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/*props*/}
      <ShowUserName name="Winton"/>
      {/* destructuring */}
      <CarDetails brand="Bugatti" km={150000} color="Midnight Blue"/>
      {/* reaproveitando */}
      <CarDetails brand="Ferrari" km={50000} color="Red"/>
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar}/>
      ))}
      {/* Children */}
      <Container>
        <p>E este é o conteúdo</p>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage}/>
      {/* Tarefa */}
      {pessoas.map((pessoa) => (
        <UserDetails key={pessoa.id} nome={pessoa.nome} idade={pessoa.idade} profissao={pessoa.profissao}/>
      ))}
    </>
  )
}

export default App
