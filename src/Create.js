import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [author, setAuthor] = useState('levi');

    return (
        <div className="create">
            <h2>Add new blog</h2>
            <form>
                <label>Blog title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    d       onChange={(e) => setBody(e.target.value)}        
                ></textarea>

                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="levi">Levi</option>
                    <option value="zsombor">Zsombor</option>
                </select>
                <button>Add blog</button>
                <p>{title}</p>
            </form>
        </div>
    );
}
 
export default Create;