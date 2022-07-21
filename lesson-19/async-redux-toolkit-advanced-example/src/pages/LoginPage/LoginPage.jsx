import {useDispatch} from "react-redux";

import {login} from "../../redux/auth/auth-operations";

import LoginForm from "../../modules/LoginForm";

const LoginPage = () => {
    const dispatch = useDispatch();

    const onLogin = (data) => {
        dispatch(login(data));
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