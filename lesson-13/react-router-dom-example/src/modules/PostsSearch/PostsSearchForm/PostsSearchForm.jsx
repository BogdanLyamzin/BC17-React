import {useState} from "react";

const PostsSearchForm = ({onSubmit}) => {
    const [state, setState] = useState({
        search: ""
    });

    const handleChange = ({target}) => {
        const {name, value} = target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    };

    const handleSubmit = (e)=> {
        e.preventDefault();
        onSubmit({...state});
        setState({search: ""})
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="search" value={state.search} onChange={handleChange} type="text" placeholder="Search posts" />
            <button type="submit">Search</button>
        </form>
    )
}

export default PostsSearchForm;