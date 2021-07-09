import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { id: 1, title: "Fejlesztes", body: "Sziasztok...", author: "Levi" },
        { id: 2, title: "Rip", body: "Ripecske...", author: "Zsombor" }
    ]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" />
            <BlogList blogs={blogs.filter((blog) => blog.author === "Levi")} title="Levi's blogs" />
        </div>
    );
}
 
export default Home;