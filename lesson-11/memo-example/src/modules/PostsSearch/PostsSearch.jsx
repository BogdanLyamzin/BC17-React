import { useState, useEffect, useCallback } from "react";

import PostsSearchForm from "./PostsSearchForm";
import PostList from "./PostList";

import Modal from "../../shared/components/Modal";

import { searchPosts } from "../../shared/services/posts";

import styles from "./posts-search.module.css";

const PostsSearch = () => {
    const [posts, setPosts] = useState({
        items: [],
        loading: false,
        error: null,
    });

    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [modal, setModal] = useState({
        isOpen: false,
        content: {}
    });

    useEffect(()=> {
        const fetchPosts = async ()=> {
            setPosts(prevPosts => ({
                ...prevPosts,
                loading: true,
                error: null
            }));

            try {
                const data = await searchPosts(search, page);

                setPosts(prevPosts => ({
                    ...prevPosts,
                    items: [...prevPosts.items, ...data],
                    loading: false,
                }))
            } catch (error) {
                setPosts(prevPosts => ({
                    ...prevPosts,
                    loading: false,
                    error,
                }))
            }
        }

        if(search){
            fetchPosts();
        }
    }, [page, search]);

    const changeSearch = useCallback(({ search: newSearch }) => {
        if(search !== newSearch) {
            setSearch(newSearch);
            setPosts(prevState => ({
                ...prevState,
                items: [],
                page: 1,
            }));
        }
    }, [search, setSearch, setPosts]);

    const loadMore = useCallback(() => {
        setPage(prevPage => prevPage + 1)
    }, [setPage]);

    const showModal = useCallback((content) => {
        setModal({
            isOpen: true,
            content,
        })
    }, [setModal]);

    const closeModal = useCallback(() => {
        setModal({
            content: {},
            isOpen: false,
        })
    }, [setModal]);

    const {items, loading, error} = posts;
    const {isOpen, content} = modal;

    return (
        <div>
            {isOpen && <Modal close={closeModal}>
                <h4>{content.title}</h4>
                <p>{content.body}</p>
            </Modal>}
            <PostsSearchForm onSubmit={changeSearch} />
            {error && <p>Не удалось загрузить посты</p>}
            <PostList items={items} showModal={showModal} />
            {loading && <p>...Loading</p>}
            {!loading && items.length >= 9 && <button onClick={loadMore}>Load more</button>}
        </div>
    )
}

export default PostsSearch