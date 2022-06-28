import { Component } from "react";

import TextField from "../../../shared/components/TextField";

import styles from "./form-add-book.module.css";

import {initialState} from "./initialState";
import { fields } from "./fields";

class FormAddBook extends Component {
    state = {...initialState}

    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({...this.state});
        this.setState({...initialState})
    }

    render() {
        const {handleChange, handleSubmit} = this;
        const {title, author} = this.state;

        return (
            <form onSubmit={handleSubmit}>
                <TextField value={title} onChange={handleChange} {...fields.title} />
                <TextField value={author} onChange={handleChange} {...fields.author} />
                <div className={styles.group}>
                    <button type="submit">Добавить</button>
                </div>
            </form>
        )
    }
}

export default FormAddBook;