const PostList = ({ items, onAddToFavorite }) => {

    const elements = items.map(({ id, title }) => <li key={id}>
        <p>{title}</p>
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