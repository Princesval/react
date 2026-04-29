// Challengecss.jsx
import React from 'react'
import styles from './Challengecss.module.css'

const Challengecss = ({brand, model, color}) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>Modelo: {model}</li>
            <li>Cor: {color}</li>
        </ul>
        <br />
        </div>
  )
}

export default Challengecss