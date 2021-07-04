import { useState } from 'react';

const Home = () => {

    //let name = 'Levi';
    const [name, setName] = useState('Levi');
    const [age, setAge] = useState(22);
    
    const handleClick = (e) => {
        setName('Valami');
        setAge(23);
    }
    
    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
 
export default Home;