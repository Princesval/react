import {useState} from 'react'

const ListRender = () => {

    const [list, setList] = useState(["SpongeBob", "Patrick", "Squidwards"])
    return (
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    )
}

export default ListRender