import {useState} from "react";
import axios from "axios";

export function PostCreate() {
    const [title, setTitle] = useState('');
    
    async function onSubmit(e) {
        e.preventDefault();
        
        await axios.post("http://localhost:4000/posts", {
            title,
        });
        
        setTitle('');
    }
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        className="form-control"/>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}