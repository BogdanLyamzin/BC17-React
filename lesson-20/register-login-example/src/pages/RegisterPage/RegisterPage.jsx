import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import useAuth from "../../shared/hooks/useAuth"

import { signup } from "../../redux/auth/auth-operations";

import RegisterForm from "../../modules/RegisterForm";

const RegisterPage = () => {
    const isLogin = useAuth()

    const dispatch = useDispatch();

    const onSignup = (data) => {
        dispatch(signup(data));
    }

    if (isLogin) {
        return <Navigate to="/my-books" />
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