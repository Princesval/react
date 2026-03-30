import React, {useState} from 'react';

function MyComponent2() {

    /* Update object
    const [car, setCar] = useState({year: 2024, 
                                    make: "Ford", 
                                    model: "Mustang"});

    function handleYearChange(event) {
        setCar(c => ({...c, year: event.target.value}));
    }

    function handleMakeChange(event) {
        setCar(c => ({...c, make: event.target.value}));
    }


    function handleModelChange(event) {
        setCar(c => ({...c, model: event.target.value}));
    }


    return(
        <div>
            <p>Your car is: {car.year} {car.make} {car.model}</p>

            <br />

            <input type="number" value={car.year} onChange={handleYearChange}/> <br/>
            <input type="text" value={car.make} onChange={handleMakeChange}/> <br/>
            <input type="text" value={car.model} onChange={handleModelChange}/> <br/>
        </div>
    ); */
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f, newFood])
    }
    function handleRemoveFood(index){
        setFoods(foods.filter((_, i) => i !== index))
    }

    return(
        <div>
            <h2>List of food</h2>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
            </ul>
            <input type="text" id='foodInput' placeholder='Enter food name'/>
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );

}

export default MyComponent2