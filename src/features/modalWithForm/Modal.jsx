import { createContext, useContext, useState, cloneElement } from "react";
import { createPortal } from "react-dom";

import useOutsideClick from "./useOutsideClick";

import styles from "./Modal.module.css";

const ModalContext = createContext();

export default function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const openModal = setOpenName;
  const closeModal = () => setOpenName("");

  return (
    <ModalContext.Provider value={{ openName, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: modalWindowName }) {
  const { openModal } = useContext(ModalContext);

  return cloneElement(children, { handler: () => openModal(modalWindowName) });
}

function Window({ children, name }) {
  const { openName, closeModal } = useContext(ModalContext);

  const ref = useOutsideClick(closeModal);

  if (name !== openName) return null;

  return createPortal(
    <div className={styles.overlay}>
      <div ref={ref} className={styles.modal}>
        <button className={styles.btn} onClick={closeModal}>
          ❌
        </button>
        {cloneElement(children, { onCloseModal: closeModal })}
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;
