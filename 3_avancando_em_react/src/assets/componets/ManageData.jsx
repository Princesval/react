import {useState} from 'react';

const ManageData = () => {

    const [number, setNumber] = useState(10)

    const handleClick = () => {
        setNumber(number + 5)
    }
    
  return (
    <div>
        <p>valor: {number}</p>
        <button onClick={handleClick}>Mudar valor</button>
    </div>
  )
}

export default ManageData