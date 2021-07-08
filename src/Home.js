import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { id: 1, title: "Fejlesztes", body: "Sziasztok...", author: "Levi" },
        { id: 2, title: "Rip", body: "Ripecske...", author: "Zsombor" }
    ]);

    
    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}
 
export default Home;