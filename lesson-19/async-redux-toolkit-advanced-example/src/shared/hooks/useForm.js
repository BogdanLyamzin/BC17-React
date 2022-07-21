import {useState} from "react";

const useForm = ({onSubmit, initialState, isReset = true}) => {
    const [state, setState] = useState({...initialState});

    const handleChange = ({target}) => {
        const { name, value, type, checked } = target;
        const newValue = type === "checkbox" ? checked : value;
        setState(prevState => ({
            ...prevState,
            [name]: newValue
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({...state});
        if(isReset) {
            setState({...initialState})
        }
    };

    return {state, setState, handleChange, handleSubmit};
}

export default useForm;
