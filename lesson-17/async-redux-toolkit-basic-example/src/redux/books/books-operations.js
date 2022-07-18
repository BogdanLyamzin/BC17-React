import * as api from "../../shared/api/books";

import * as actions from "./books-actions";

export const fetchBooks = () => {
    const func = async(dispatch) => {
        dispatch(actions.fetchBooksRequest());
        try {
            const data = await api.getBooks();
            dispatch(actions.fetchBooksSuccess(data));
        } catch (error) {
            dispatch(actions.fetchBooksError(error));
        }
    }

    return func;
}

export const addBook = (data) => {
    const func = async (dispatch, getState) => {
        const {books} = getState();
        const {title, author} = data;
        const isDublicate = books.items.find(item => item.title === title && item.author === author);
        if(isDublicate) {
            return alert(`${title}. ${author} is already exist`);
        }
        dispatch(actions.addBookRequest());
        try {
            const result = await api.addBook(data);
            dispatch(actions.addBookSuccess(result));
        } catch (error) {
            dispatch(actions.addBookError(error));
        }
    }

    return func;
}

export const removeBook = (id) => {
    const func = async (dispatch) => {
        dispatch(actions.removeBookRequest());
        try {
            const data = await api.removeBook(id);
            dispatch(actions.removeBookSuccess(data.id));
        }
        catch(error) {
            dispatch(actions.removeBookError(error));
        }
    }

    return func;
}