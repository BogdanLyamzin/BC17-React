import {useSelector} from "react-redux";

import { getFavoriteBooks } from "../../redux/books/books-selectors";

const MyFavoriteBooksPage = () => {
    const favoriteBooks = useSelector(getFavoriteBooks);

    const elements = favoriteBooks.map(({id, title, author}) => (
        <li key={id}>{title}. Автор: {author}</li>
    ))

    return (
        <main>
            <div className="container">
                <h2>My favorite books Page</h2>
                <ul>
                    {elements}
                </ul>
            </div>
        </main>
    )
}

export default MyFavoriteBooksPage;