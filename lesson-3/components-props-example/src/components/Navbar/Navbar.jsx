import NavbarMenu from "./NavbarMenu";

import Button from "../Button";

import styles from "./navbar.module.css";

const Navbar = ({menuItems}) => {
    return (
        <nav className={styles.navbar}>
            <a href="#">Logo</a>
            <NavbarMenu items={menuItems} />
            <Button text="Register" />
        </nav>
    )
};

export default Navbar;