import useForm from "../../shared/hooks/useForm";

import TextField from "../../shared/components/TextField";

import { initialState } from "./initialState";
import { fields } from "./fields";

const RegisterForm = ({onSubmit}) => {
    const { state, handleChange, handleSubmit } = useForm({ onSubmit, initialState });

    const { name, email, password } = state;

    return (
        <form onSubmit={handleSubmit}>
            <TextField value={name} onChange={handleChange} {...fields.name} />
            <TextField value={email} onChange={handleChange} {...fields.email} />
            <TextField value={password} onChange={handleChange} {...fields.password} />
            <button type="submit">Register</button>
        </form>
    )
}

export default RegisterForm;