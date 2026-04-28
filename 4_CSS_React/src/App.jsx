// CSS DE COMPONENTE SENO IMPORTADO
import './App.css' 
import Title from './components/Title'

function App() {

  return (
    <>
     <div>
        <h1>React com CSS</h1>

        {/* CSS INLINE */}
        <p style={{color: "red", padding: "20px"}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, sequi.
        </p>
        <Title/>
     </div>
    </>
  )
}

export default App
