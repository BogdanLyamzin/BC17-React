import {useDispatch} from "react-redux";

import { signup } from "../../redux/auth/auth-operations";

import RegisterForm from "../../modules/RegisterForm";

const RegisterPage = () => {
    const dispatch = useDispatch();

    const onSignup = (data) => {
        dispatch(signup(data));
    }

    return (
        <main>
        <div className="container">
            <h2>Register Page</h2>
            <RegisterForm onSubmit={onSignup} />
        </div>
    </main>
    )
}

export default RegisterPage;