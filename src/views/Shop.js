import axios from "axios";
import { useState } from "react";

const Shop = props => {

    const getAnimalData = async () => {
        let response = await axios.get('https://foxes84-tweetyer.herokuapp.com/api/animals');
        return response.status === 200 ? response.data : null
    }
    const loadAnimalData = async () => {
        let data = await getAnimalData();
        console.log(data.Animals, typeof data.Animals);
        setAnimals(data.Animals);
    }
    const [animals, setAnimals] = useState(() => loadAnimalData());
    // const { cart, setCart } = useContext(DataContext);

    // const buyAnimal = (animal) => {
    //     let 
    // }


    return (
        <div className="container">
            <div className="row justify-content-center">
                <h2>Buy some exotic animals!</h2>
            </div>
            <div className="row">
                {typeof animals === 'object' && !animals.then ? animals.map((animal, index) => {
                    return <div key={index} class="card" style={{ width: 18 + 'rem' }}>
                        <img src={animal.image} class="card-img-top" alt={animal.name} />
                        <div className="card-body">
                            <h4 className="card-title"><strong>{animal.name}</strong></h4>
                            <h5 className="card-text"><i>{animal.sci_name}</i></h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{animal.description}</li>
                            <li className="list-group-item">Eats: {animal.diet}</li>
                            <li className="list-group-item">Lifespan: {animal.lifespan}</li>
                        </ul>
                        <div className="card-body">
                            <button className="btn btn-md btn-dark" disabled>${animal.price.toFixed(2)}</button>
                            {/* <button className="btn btn-md btn-success" onClick={() => buyAnimal(animal)}>Buy me!</button> */}
                        </div>
                    </div>

                }) : <h3>Pulling the </h3>
            }

            </div>
        </div>
    );
}
export default Shop;