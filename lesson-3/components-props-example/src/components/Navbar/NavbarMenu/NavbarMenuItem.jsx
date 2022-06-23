import PropTypes from "prop-types";

import styles from "./navbar-menu.module.css";

const NavbarMenuItem = ({text, link}) => {
    return (
        <li  className={styles.item}>
            <a className={styles.link} href={link}>{text}</a>
        </li>
    )
}

export default NavbarMenuItem;

NavbarMenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}