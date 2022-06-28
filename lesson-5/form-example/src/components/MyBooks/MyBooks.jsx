
import { Component } from "react";
import { nanoid } from "nanoid";

import Container from "./Container";

import styles from "./my-books.module.css";

class MyBooks extends Component {

    state = {
        books: [],
        title: "",
        author: "",
        filter: ""
    }

    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.addBook();
        this.setState({
            title: "",
            author: ""
        })
    }

    addBook() {
        this.setState(({ books, title, author }) => {
            const newBook = {
                title,
                author,
                id: nanoid()
            };
            return {
                books: [...books, newBook]
            }
        });
    }

    removeBook = (id) => {
        this.setState(({ books }) => {
            return {
                books: books.filter(item => item.id !== id)
            }
        })
    }

    getFilteredBooks() {
        const { filter, books } = this.state;
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

    render() {
        const { handleChange, handleSubmit, removeBook } = this;

        const { title, author } = this.state;

        const books = this.getFilteredBooks();

        const elements = books.map(({ id, title, author }) => (
            <li key={id}
                className={styles.item}>{title}. Автор: {author}.
                <button type="button"
                    className={styles.btn}
                    onClick={() => removeBook(id)}>Удалить</button>
            </li>
        ));

        return (
            <div className={styles.books}>
                <Container title="Добавить книгу">
                    <form action="" onSubmit={handleSubmit}>
                        <div className={styles.group}>
                            <label className={styles.label} htmlFor="">Название:</label>
                            <input value={title} name="title" onChange={handleChange} className={styles.input} type="text" placeholder="Название книги" />
                        </div>
                        <div className={styles.group}>
                            <label className={styles.label} htmlFor="">Автор:</label>
                            <input value={author} name="author" onChange={handleChange} className={styles.input} type="text" placeholder="Автор книги" />
                        </div>
                        <div className={styles.group}>
                            <button type="submit">Добавить</button>
                        </div>
                    </form>
                </Container>
                <Container title="Список книг">
                    <input onChange={handleChange} name="filter" type="text" placeholder="Введите название " />
                    <ul>
                        {elements}
                    </ul>
                </Container>
            </div>
        )
    }
}

export default MyBooks;