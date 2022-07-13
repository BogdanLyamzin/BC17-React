import {useState, useCallback, useMemo, memo} from "react";
import { nanoid } from "@reduxjs/toolkit";
import PropTypes from "prop-types";

const GreateHousesAddForm = ({onSubmit}) => {
    const [state, setState] = useState({
        name:"",
        words: ""
    });

    const nameId = useMemo(()=> nanoid(), []);
    const wordsId = useMemo(()=> nanoid(), []);

    const handleChange = useCallback(({target})=> {
        const {name, value} = target;
        setState(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }, [setState]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({...state});
        setState({name: "", words: ""})
    };

    const {name, words} = state;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor={nameId}>Название</label>
                <input name="name" value={name} onChange={handleChange} id={nameId} placeholder="Название" />
            </div>
            <div>
                <label htmlFor={wordsId}>Девиз</label>
                <input name="words" value={words} onChange={handleChange} id={wordsId} placeholder="Девиз" />
            </div>
            <button type="submit">Добавить</button>
        </form>
    )
}

export default memo(GreateHousesAddForm);

GreateHousesAddForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}