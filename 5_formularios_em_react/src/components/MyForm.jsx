import React, { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
    // Geremciamento de dados
    const [name, setName] = useState(user ? user.name : "")
    const [email, setEmail] = useState(user ? user.email : "")
    const [bio, setBio] = useState(user ? user.bio : "")
    const [role, setRole] = useState("")

    const handleName = (e) => {
        console.log(e.target.value)
        setName(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Enviando o formulário')
        console.log(name, email, bio, role)

        // limpar formulário
        setName("")
        setEmail("")
        setBio("")
    }

  return (
    <div>
        {/* Criando um form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input value={name} type="text" name='name' placeholder='Digite seu nome' onChange={handleName}/>
            </div>
            {/* Label envolvendo o input */}
            <label>
                <span>Email:</span>
                <input value={email} type="email" name="email" placeholder='Digite seu email' 
                onChange={(e) => setEmail(e.target.value)}/>
            </label>
            {/* textarea */}
            <label>
                <span>Bio:</span>
                <textarea value={bio} name="bio" placeholder='Descrição do usuário'
                onChange={(e) => setBio(e.target.value)}>

                </textarea>
            </label>
            {/* select */}
            <label>
                <span>Função no sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)}>
                    <option value="tank">Tank</option>
                    <option value="suporte">Suporte</option>
                    <option value="dano">Dano</option>
                </select>
            </label>
            <input type="submit" value="enviar" />
        </form>
    </div>
  )
}

export default MyForm