import {useState, useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import PostList from "../../shared/components/PostList";

import PostsSearchForm from "./PostsSearchForm";

import {searchPosts} from "../../shared/api/posts";

const PostsSearch = () => {
    const [state, setState] = useState({
        items:[],
        loading: false,
        error: null,
    });
    
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get("search");

    useEffect(()=> {
        const fetchPosts = async() => {
            setState(prevState => ({
                ...prevState,
                loading: true,
            }));

            try {
                const data = await searchPosts(search);
                setState(prevState => ({
                    ...prevState,
                    items: data,
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

        if(search) {
            fetchPosts();
        }
    }, [search, setState])

    const changeSearch = ({search}) => setSearchParams({search});

    const {items, loading, error} = state;

    return(
        <div>
            <PostsSearchForm onSubmit={changeSearch} />
            <PostList items={items} />
        </div>
    )
}

export default PostsSearch;