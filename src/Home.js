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
        </div>
    );
}
 
export default Home;