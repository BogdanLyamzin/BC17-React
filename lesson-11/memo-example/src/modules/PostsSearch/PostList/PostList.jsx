import PropTypes from "prop-types";

import PostListItem from "./PostListItem";

import styles from "../posts-search.module.css";

const PostList = ({ items, showModal }) => {
    const elements = items.map(({ id, ...rest }) => <PostListItem key={id} {...rest} showModal={showModal} />);

    return (
        <ul className={styles.list}>
            {elements}
        </ul>
    )
}

export default PostList;

PostList.defaultProps = {
    items: []
}

PostList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
    }))
}