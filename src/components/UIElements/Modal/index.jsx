import React from "react";
import styles from "./modal.module.scss";
import { IoMdClose } from "react-icons/io";

const Modal = ({ isOpen, onClose, children, noClose = false, title = "" }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <p className={styles.title}>{title}</p>
          {!noClose && (
            <p className={styles.closeButton} onClick={onClose}>
              <IoMdClose />
            </p>
          )}
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
