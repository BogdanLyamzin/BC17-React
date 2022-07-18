import { useSelector, useDispatch } from "react-redux";

import {removeFromFavorite} from "../../redux/favorite-posts/favorite-posts-actions";

import { getFavoritePosts } from "../../redux/favorite-posts/favorite-posts-selectors";

const MyFavoritePostsPage = () => {
    const favoritePosts = useSelector(getFavoritePosts);

    const dispatch = useDispatch();

    const onRemove = (idx) => {
        dispatch(removeFromFavorite(idx))
    }

    const elements = favoritePosts.map(({id, title}, index) => (
        <li key={id}>{title}. <button onClick={()=> onRemove(index)}>Убрать</button></li>
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