import {useState, useEffect} from "react";

import { useParams, useNavigate } from "react-router-dom";

import SinglePost from "../../modules/SinglePost";

import { getPostById } from "../../shared/api/posts";

const SinglePostPage = ()=> {
    const [state, setState] = useState({
        post: {},
        loading: false,
        error: null,
    });

    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(()=> {
        const fetchPost = async() => {
            setState(prevState => ({
                ...prevState,
                loading: true,
            }));

            try {
                const post = await getPostById(id);
                setState(prevState => ({
                    ...prevState,
                    post,
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

        fetchPost();
    }, []);

    const goBack = () => navigate(-1);

    const {post, loading, error} = state;

    const isPost = Object.keys(post).length > 0;

    return (
        <main>
            <div className="container">
                {loading && <p>...Loading</p>}
                {error && <p>Post not found</p>}
                {isPost && <button onClick={goBack}>Go back</button>}
                {isPost && <SinglePost {...post} />}
            </div>
        </main>
    )
}

export default SinglePostPage;