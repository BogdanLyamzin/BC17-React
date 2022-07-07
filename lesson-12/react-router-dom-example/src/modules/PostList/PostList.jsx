import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import {getPosts} from "../../shared/api/posts";

import styles from "./post-list.module.css";

const PostList = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    });

    useEffect(()=> {
        const fetchPosts = async () => {
            setState(prevState => ({
                ...prevState,
                loading: true,
            }));

            try {
                const data = await getPosts();
                setState(prevState => ({
                    ...prevState,
                    items: [...data],
                    loading: false,
                }))
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                    error,
                }))
            }
        };

        fetchPosts();
    }, []);

    const {items, loading, error} = state;

    const elements = items.map(({id, title}) => <li key={id}>
        <Link to={`/posts/${id}`}>{title}</Link>
    </li>);

    return (
        <>   
        {loading && <p>...Loading</p>}  
        {error && <p>Posts not found</p>}   
        <ul>
            {elements}
        </ul>
        </>
    )
}

export default PostList;