import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getPostComments } from "../../shared/api/posts";

const CommentsPage = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    });

    const { id } = useParams();

    useEffect(() => {
        const fetchPosts = async () => {
            setState(prevState => ({
                ...prevState,
                loading: true,
            }));

            try {
                const data = await getPostComments(id);
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                    items: data
                }))
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                    error,
                }))
            }
        };

        fetchPosts()
    }, [id])

    const { items, loading, error } = state;

    const elements = items.map(({ id, name, email, body }) => <li key={id}>
        <p>{name}. {email}</p>
        <p>{body}</p>
    </li>)

    return (<ul>
        {elements}
    </ul>)
}

export default CommentsPage;