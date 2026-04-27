import React from 'react'

const UserDetails = ({nome, idade, profissao}) => {
  return (
    <div>
        <h2>Informações das pessoas</h2>
        <ul>
            <li>Nome: {nome}</li>
            <li>Idade: {idade}</li>
            <li>Profissão: {profissao}</li>
        </ul>
        {idade >= 18 ? <p>Apto para tirar habilitação</p> : <p>Não está apto para tirar habilitação</p>}
    </div>
  )
}

export default UserDetails