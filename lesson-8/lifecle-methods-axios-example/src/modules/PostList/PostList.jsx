import { Component } from "react";

import { getPosts } from "../../shared/services/posts";

import styles from "./post-list.module.css";

class PostList extends Component {
    state = {
        items: [],
        loading: false,
        error: null,
        page: 1
    }

    componentDidMount() {
        this.fetchPosts();
    }

    componentDidUpdate(prevProps, prevState) {
        const { page } = this.state;
        if (page > prevState.page) {
            this.fetchPosts();
        }
    }

    async fetchPosts() {
        this.setState({
            loading: true
        })
        const { page } = this.state;
        try {
            const data = await getPosts(page);
            this.setState(({items}) => {
                return {
                    items: [...items, ...data],
                }
            })
        } catch (error) {
            this.setState({
                error: error
            })
        }
        finally {
            this.setState({ loading: false })
        }
    }

    loadMore = () => {
        this.setState(({ page }) => {
            return {
                page: page + 1
            }
        })
    }

    render() {
        const { items, loading, error } = this.state;
        const { loadMore } = this;

        const elements = items.map(({ id, title, body }) =>
            <li className={styles.item} key={id}>
                <h4>{title}</h4>
                <p>{body}</p>
            </li>);

        return (
            <>
                {error && <p>Не удалось загрузить посты</p>}
                <ul className={styles.list}>
                    {elements}
                </ul>
                {loading && <p>...Loading</p>}
                {!loading && items.length >= 9 && <button onClick={loadMore}>Load more</button>}
            </>
        )
    }
}


export default PostList