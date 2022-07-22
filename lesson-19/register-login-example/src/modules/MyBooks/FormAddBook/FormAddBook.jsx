import { memo, useMemo } from "react";
import { nanoid } from "nanoid";

import useForm from "../../../shared/hooks/useForm";

import styles from "./form-add-book.module.css";

import { initialState } from "./initialState";

const FormAddBook = ({ onSubmit }) => {

    const titleId = useMemo(() => nanoid(), []);
    const authorId = useMemo(() => nanoid(), []);
    const favoriteId = useMemo(() => nanoid(), []);

    const { state, handleChange, handleSubmit } = useForm({ onSubmit, initialState })

    const { title, author, favorite } = state;

    return (
        <form action="" onSubmit={handleSubmit}>
            <div className={styles.group}>
                <label className={styles.label} htmlFor={titleId}>Название:</label>
                <input value={title} name="title" id={titleId} onChange={handleChange} className={styles.input} type="text" placeholder="Название книги" />
            </div>
            <div className={styles.group}>
                <label className={styles.label} htmlFor={authorId}>Автор:</label>
                <input value={author} name="author" id={authorId} onChange={handleChange} className={styles.input} type="text" placeholder="Автор книги" />
            </div>
            <div className={styles.group}>
                <label className={styles.label} htmlFor={authorId}>Любимая:</label>
                <input name="favorite" checked={favorite} id={favoriteId} onChange={handleChange} className={styles.input} type="checkbox" />
            </div>
            <div className={styles.group}>
                <button type="submit">Добавить</button>
            </div>
        </form>
    )
}

export default memo(FormAddBook);