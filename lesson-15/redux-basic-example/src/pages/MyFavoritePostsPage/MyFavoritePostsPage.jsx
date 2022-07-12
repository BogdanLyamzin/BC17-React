import { useSelector } from "react-redux";

import { getFavoritePosts } from "../../redux/favorite-posts/favorite-posts-selectors";

const MyFavoritePostsPage = () => {
    const favoritePosts = useSelector(getFavoritePosts);

    const elements = favoritePosts.map(({id, title}) => (
        <li key={id}>{title}</li>
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