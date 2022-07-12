import { useState, useCallback } from "react";
import {useSelector, useDispatch} from "react-redux";

import Container from "./Container";
import FormAddBook from "./FormAddBook";
import BookList from "./BookList";

import { addBook, removeBook } from "../../redux/books/books-actions";
import { getBooks } from "../../redux/books/books-selectors";

import styles from "./my-books.module.css";

const MyBooks = () => {
    const books = useSelector(getBooks);
    const dispatch = useDispatch();

    const onAddBook = (data) => {
        const action = addBook(data);
        dispatch(action);
    }

    const onRemoveBook = (id) => {
        dispatch(removeBook(id));
    }

    /*
    const [filter, setFilter] = useState("");

    const handleFilter = ({target}) => setFilter(target.value)

    const getFilteredBooks = () => {
        if (!filter) {
            return books;
        }
        const filterValue = filter.toLowerCase();
        const filteredBooks = books.filter(({ title }) => {
            const titleValue = title.toLowerCase();
            return titleValue.includes(filterValue);
        });

        return filteredBooks;
    }

    const filteredBooks = getFilteredBooks();
    */

    return (
        <div className={styles.books}>
            <Container title="Добавить книгу">
                <FormAddBook onSubmit={onAddBook} />
            </Container>
            <Container title="Список книг">
                {/* <input onChange={handleFilter} name="filter" type="text" placeholder="Введите название " /> */}
                <BookList books={books} removeBook={onRemoveBook} />
            </Container>
        </div>
    )

}

export default MyBooks;