import {useState} from 'react'

const ListRender = () => {

    const [list, setList] = useState(["SpongeBob", "Patrick", "Squidwards"])

    const [users, setUsers] = useState([
        {id: 1, name: "SpongeBob", age: 31}, 
        {id: 2, name: "Patrick", age: 28}, 
        {id: 3, name: "Squidwards", age: 41}])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prev) => {
            return prev.filter((user) => randomNumber !== user.id)
        })
    }


    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <br />
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    )
}

export default ListRender