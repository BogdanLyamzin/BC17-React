import styles from "./text-field.module.css";

const TextField = ({label, value, type, name, onChange, placeholder}) => {
    return (
        <div className={styles.group}>
            {label && <label className={styles.label} htmlFor="">{label}</label>}
            <input value={value} name={name} onChange={onChange} className={styles.input} type={type} placeholder={placeholder} />
        </div>
    )
}

export default TextField;

TextField.defaultProps = {
    type: "text"
}