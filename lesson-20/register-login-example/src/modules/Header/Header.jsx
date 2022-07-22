import useAuth from "../../shared/hooks/useAuth";

import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import HeaderAuth from "./HeaderAuth";
import UserMenu from "./UserMenu";

import styles from "./header.module.css";

const Header = () => {
    const isLogin = useAuth()
    
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.row}>
                    <Logo />
                    <HeaderMenu isLogin={isLogin} />
                    {isLogin ? <UserMenu /> : <HeaderAuth />}
                </div>
            </div>
        </header>
    )
}

export default Header;