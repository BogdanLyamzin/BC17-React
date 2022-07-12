import {Link, useLocation} from "react-router-dom";

const PostList = ({ items, onAddToFavorite }) => {
    const location = useLocation();
    console.log(location);

    const elements = items.map(({ id, title }) => <li key={id}>
        <Link to={`/posts/${id}`} state={{prevPageLocation: location}}>{title}</Link>
        <button onClick={() => onAddToFavorite({id, title})}>В избранное</button>
    </li>);

    return (
        <ul>
            {elements}
        </ul>
    )
}

export default PostList;

PostList.defaultProps = {
    items: []
}