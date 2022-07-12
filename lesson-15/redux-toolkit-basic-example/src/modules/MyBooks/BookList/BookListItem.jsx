import { memo } from "react";

import styles from "./book-list.module.css";

const BookListItem = ({id, title, author, removeBook}) => {
    return (
        <li
            className={styles.item}>{title}. Автор: {author}.
            <button onClick={()=> removeBook(id)} type="button" className={styles.btn}>Удалить</button>
        </li>
    )
}

export default memo(BookListItem);