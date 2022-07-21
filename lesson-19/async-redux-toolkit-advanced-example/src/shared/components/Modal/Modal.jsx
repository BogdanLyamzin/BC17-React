import { Component } from "react";
import { createPortal } from "react-dom";

import styles from "./modal.module.css";

const modalRoot = document.getElementById("modal-root");

class Modal extends Component {
    componentDidMount() {
        document.addEventListener("keydown", this.handleClose);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleClose);
    }

    handleClose = (e) => {
        if (e.target === e.currentTarget) {
            this.props.close();
            return;
        }
        if (e.code === "Escape") {
            this.props.close();
        }
    }

    render() {
        const { close, children } = this.props;
        const { handleClose } = this;

        return createPortal(
            (
                <div className={styles.overlay} onClick={handleClose}>
                    <div className={styles.modal}>
                        <span onClick={close} className={styles.close}>X</span>
                        {children}
                    </div>
                </div>
            ),
            modalRoot

        )
    }
}

export default Modal;