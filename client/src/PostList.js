import {useState, useEffect} from "react";
import axios from "axios";
import {CommentCreate} from "./CommentCreate.js";
import {CommentList} from "./CommentList.js";

export function PostList() {
    const [posts, setPosts] = useState({});

    useEffect(() => {
        fetchPosts();
    }, []);

    async function fetchPosts() {
        const res = await axios.get("http://localhost:4000/posts");

        setPosts(res.data);
    }

    const renderedPosts = Object.values(posts).map((post) => {
        return (
            <div className="card"
                 style={{width: '30%', marginBottom: '20px'}}
                 key={post.id}
            >
                <div className="card-body">
                    <h3>{post.title}</h3>
                    <CommentList postId={post.id}/>
                    <CommentCreate postId={post.id} />
                </div>
            </div>
        );
    });

    return (
        <div className="d-flex flex-flow flex-wrap justify-content-between">
            {renderedPosts}
        </div>
    );
}