const Home = () => {

    const handleClick = (e) => {
        console.log("Hello", e);
    }

    const handleClick2 = (name, e) => {
        console.log(`Hello ${name}`);
        console.log(e);
    }
    
    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button><br />
            <button onClick={(e) => handleClick2("Levi", e)}>Click me 2</button>
        </div>
    );
}
 
export default Home;