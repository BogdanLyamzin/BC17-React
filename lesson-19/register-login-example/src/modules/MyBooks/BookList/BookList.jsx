import BookListItem from "./BookListItem";

const BookList = ({ books, removeBook }) => {
    const elements = books.map((item) => <BookListItem removeBook={removeBook} key={item._id} {...item} />);

    return (
        <ul>
            {elements}
        </ul>
    )
}

export default BookList;

BookList.defaultProps = {
    books: []
}