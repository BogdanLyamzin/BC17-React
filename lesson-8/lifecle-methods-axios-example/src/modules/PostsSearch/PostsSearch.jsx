import { Component } from "react";

import PostsSearchForm from "./PostsSearchForm";

import Modal from "../../shared/components/Modal";

import { searchPosts } from "../../shared/services/posts";

import styles from "./posts-search.module.css";

class PostsSearch extends Component {
    state = {
        items: [],
        loading: false,
        error: null,
        search: "",
        page: 1,
        modalOpen: false,
        modalContent: {}
    }

    componentDidUpdate(prevProps, prevState) {
        const { page, search } = this.state;
        if (page > prevState.page || search !== prevState.search) {
            this.fetchPosts();
        }
    }

    async fetchPosts() {
        this.setState({
            loading: true
        })
        const { search, page } = this.state;
        try {
            const data = await searchPosts(search, page);
            this.setState(({ items }) => {
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

    changeSearch = ({ search }) => {
        this.setState({
            search,
            items: []
        })
    }

    loadMore = () => {
        this.setState(({ page }) => {
            return {
                page: page + 1
            }
        })
    }

    showModal = (modalContent) => {
        this.setState({
            modalOpen: true,
            modalContent
        })
    }

    closeModal = () => {
        this.setState({
            modalOpen: false
        })
    }

    render() {
        const { items, loading, error, modalOpen, modalContent } = this.state;
        const { loadMore, changeSearch, showModal, closeModal } = this;

        const elements = items.map(({ id, title, body }) =>
            <li onClick={() => showModal({ title, body })} className={styles.item} key={id}>
                <h4>{title}</h4>
                <p>{body}</p>
            </li>);

        return (
            <div>
                {modalOpen && <Modal close={closeModal}>
                    <h4>{modalContent.title}</h4>
                    <p>{modalContent.body}</p>
                </Modal>}
                <PostsSearchForm onSubmit={changeSearch} />
                {error && <p>Не удалось загрузить посты</p>}
                <ul className={styles.list}>
                    {elements}
                </ul>
                {loading && <p>...Loading</p>}
                {!loading && items.length >= 9 && <button onClick={loadMore}>Load more</button>}
            </div>
        )
    }
}


export default PostsSearch