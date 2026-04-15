
function Student(props) {
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
}

export default Student

/* 
Props: dados passados de um componente pai para um componente filho. Elas permitem que os componentes sejam reutilizáveis e dinâmicos, já que você pode mudar o conteúdo ou comportamento deles sem alterar o componente em si.
*/