import PropTypes from "prop-types";

import NavbarMenuItem from "./NavbarMenuItem";

import styles from "./navbar-menu.module.css";

const NavbarMenu = ({ items }) => {
    const elements = items.map(item => <NavbarMenuItem key={item.id} {...item} />);

    return (
        <ul className={styles.menu}>
            {elements}
        </ul>
    )
}

export default NavbarMenu;

NavbarMenu.defaultProps = {
    items: []
}

NavbarMenu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    }))
}