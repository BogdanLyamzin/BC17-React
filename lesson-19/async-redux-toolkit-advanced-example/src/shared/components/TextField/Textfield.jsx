import {useMemo} from "react";
import { nanoid } from "@reduxjs/toolkit";

import styles from "./text-field.module.css";

const TextField = ({label, name, value, onChange, placeholder, required, type}) => {
    const id = useMemo(()=> nanoid(), []);

    return (
        <div className={styles.block}>
            {label && <label className={styles.label} htmlFor={id}>{label}: </label>}
            <input className={styles.input} id={id} name={name} value={value} onChange={onChange} placeholder={placeholder} required={required} type={type} />
        </div>
    )
}

export default TextField;

TextField.defaultProps = {
    type: "text",
    required: false,
}