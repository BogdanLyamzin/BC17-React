import { useSelector, useDispatch } from "react-redux";

import {removePost} from "../../redux/favorite-posts/favorite-posts-operations";

import { getFavoritePosts } from "../../redux/favorite-posts/favorite-posts-selectors";

const MyFavoritePostsPage = () => {
    const {items, loading, error} = useSelector(getFavoritePosts);
    console.log(items)
    const dispatch = useDispatch();

    const onRemove = (id) => {
        dispatch(removePost(id))
    }

    const elements = items.map(({id, title}, index) => (
        <li key={id}>{title}. <button onClick={()=> onRemove(id)}>Убрать</button></li>
    ))

    return (
        <main>
            <div className="container">
                <h2>My favorite Posts Page</h2>
                <ul>
                    {elements}
                </ul>
            </div>
        </main>
    )
}

export default MyFavoritePostsPage;