import {Link} from "react-router-dom";

import styles from "./logo.module.css";

const Logo = ()=> {
    return <Link to="/" className={styles.logo}>Logo</Link>
}

export default Logo;