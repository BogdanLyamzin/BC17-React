import PropTypes from "prop-types";

import styles from "./button.module.css";

const Button = ({text, active})=> {
    const fullClassName = active ? `${styles.btn} ${styles.active}` : styles.btn;
    return (
        <button className={fullClassName}>{text}</button>
    )
}

export default Button;

Button.propTypes = {
    text: PropTypes.string.isRequired,
    active: PropTypes.bool
}