import { memo } from "react";

import styles from "../posts-search.module.css";

const PostListItem = ({title, body, showModal})=> {
    return (
        <li onClick={() => showModal({ title, body })} className={styles.item}>
            <h4>{title}</h4>
            <p>{body}</p>
        </li>
    )
}

export default memo(PostListItem);