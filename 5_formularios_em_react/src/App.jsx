import './App.css'
import MyForm from './components/MyForm.jsx'

function App() {

  return (
    <>
      <div>
        <h2>Forms</h2>
        <MyForm user={{name:"Lúcio", email: "123@gmail.com", bio:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis laboriosam optio voluptatem nisi, non autem labore eveniet tempore et cumque! Iusto totam quibusdam in quis."}} />
      </div>
      
    </>
  )
}

export default App
