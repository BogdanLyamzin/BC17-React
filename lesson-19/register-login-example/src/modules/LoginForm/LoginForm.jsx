import useForm from "../../shared/hooks/useForm";

import TextField from "../../shared/components/TextField";

import { initialState } from "./initialState";
import { fields } from "./fields";

const LoginForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({ onSubmit, initialState });

    const { email, password } = state;

    return (
        <form onSubmit={handleSubmit}>
            <TextField value={email} onChange={handleChange} {...fields.email} />
            <TextField value={password} onChange={handleChange} {...fields.password} />
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm;