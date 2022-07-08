import {useState, useEffect} from "react";
import {Link, Outlet, useLocation} from "react-router-dom";

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

    const location = useLocation();

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

    const prevPageLocation = location.state?.prevPageLocation || "/";

    const goBack = () => navigate(prevPageLocation);

    const {post, loading, error} = state;

    const isPost = Object.keys(post).length > 0;

    return (
        <main>
            <div className="container">
                {loading && <p>...Loading</p>}
                {error && <p>Post not found</p>}
                {isPost && <button onClick={goBack}>Go back</button>}
                {isPost && <SinglePost {...post} />}
                {isPost && <Link state={{prevPageLocation}} to={`comments`}>Comments</Link>}
                <Outlet />
            </div>
        </main>
    )
}

export default SinglePostPage;