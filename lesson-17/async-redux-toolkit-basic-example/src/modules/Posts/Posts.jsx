import {useState, useEffect} from "react";
import { useDispatch } from "react-redux";

import PostList from "../../shared/components/PostList";

import {getPosts} from "../../shared/api/posts";

import {addToFavorite} from "../../redux/favorite-posts/favorite-posts-actions";

import styles from "./posts.module.css";

const Posts = () => {
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

    const dispatch = useDispatch();

    const onAddToFavorite = (data) => {
        dispatch(addToFavorite(data));
    }

    const {items, loading, error} = state;

    return (
        <>   
        {loading && <p>...Loading</p>}  
        {error && <p>Posts not found</p>}   
        <PostList items={items} onAddToFavorite={onAddToFavorite} />
        </>
    )
}

export default Posts;