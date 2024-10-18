import {useEffect, useState} from "react";
import axios from "axios";

export function CommentList({ postId }) {
    const [comments, setComments] = useState([]);
    
    async function fetchData() {
        const res = await axios.get(`http://localhost:40001/posts/${postId}/comments`);
        
        setComments(res.data);
    }
    
    useEffect(() => {
        fetchData();
    }, [])
    
    const renderedComments = comments.map((comment) => {
       return <li key={comment.id}>{comment.id}</li> 
    });
    
    return (
        <ul>{renderedComments}</ul>
    );
}