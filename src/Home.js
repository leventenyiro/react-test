import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { id: 1, title: "Fejlesztes", body: "Sziasztok...", author: "Levi" },
        { id: 2, title: "Rip", body: "Ripecske...", author: "Zsombor" }
    ]);

    const [name, setName] = useState("Levi");

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log("Use effect ran");
        console.log(name);
    }, [name]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            <button onClick={() => setName("Valami")}>Change name</button>
            <p>{ name }</p>
        </div>
    );
}
 
export default Home;