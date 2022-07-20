import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Container from "./Container";
import FormAddBook from "./FormAddBook";
import BookList from "./BookList";

import { fetchBooks, addBook, removeBook } from "../../redux/books/books-operations";
import { getBooks } from "../../redux/books/books-selectors";

import styles from "./my-books.module.css";

const MyBooks = () => {
    const { items, loading, error } = useSelector(getBooks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    const onAddBook = (data) => {
        dispatch(addBook(data));
    }

    const onRemoveBook = (id) => {
        dispatch(removeBook(id));
    }

    return (
        <div className={styles.books}>
            <Container title="Добавить книгу">
                <FormAddBook onSubmit={onAddBook} />
            </Container>
            <Container title="Список книг">
                {/* <input onChange={handleFilter} name="filter" type="text" placeholder="Введите название " /> */}
                {loading && <p>...Loading</p>}
                <BookList books={items} removeBook={onRemoveBook} />
            </Container>
        </div>
    )

}

export default MyBooks;