import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import NavbarAuth from "./NavbarAuth";

import styles from "./header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.row}>
                    <Logo />
                    <HeaderMenu />
                    <NavbarAuth />
                </div>
            </div>
        </header>
    )
}

export default Header;