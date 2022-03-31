import { useEffect, useState } from "react";


const Home = () => {

    const [animal, setAnimal] = useState('foxy');

    const changeAnimal = () => {

    if (animal === 'foxy'){
        setAnimal('Black bear');
    } else {
        setAnimal('foxy');
        }
}


useEffect(() => {console.log('home component rendered!')});

return (
    <div>
        <h1>There's no place like home.</h1>
        <h3>{animal}</h3>
        <button className="btn btn-secondary" onClick={changeAnimal}>button</button>
    </div>
);
}
export default Home;