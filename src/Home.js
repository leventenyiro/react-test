import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    const [name, setName] = useState("Levi");

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        fetch("http://localhost:8000/blogs")
            .then(res => {
                return res.json();
            })
            .then((data) => {
                console.log(data)
                setBlogs(data)
            })
    }, []);

    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            <p>{ name }</p>
        </div>
    );
}
 
export default Home;