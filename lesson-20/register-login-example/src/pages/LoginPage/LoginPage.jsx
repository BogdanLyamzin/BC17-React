import {useDispatch} from "react-redux";
import { Navigate } from "react-router-dom";

import useAuth from "../../shared/hooks/useAuth"

import {login} from "../../redux/auth/auth-operations";

import LoginForm from "../../modules/LoginForm";

const LoginPage = () => {

    const isLogin = useAuth();

    const dispatch = useDispatch();

    const onLogin = (data) => {
        dispatch(login(data));
    }

    if(isLogin) {
        return <Navigate to="/my-books" />
    }

    return (
        <main>
        <div className="container">
            <h2>Login Page</h2>
            <LoginForm onSubmit={onLogin} />
        </div>
    </main>
    )
}

export default LoginPage;