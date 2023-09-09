import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";

import useOutsideClick from "../modalWithForm/useOutsideClick";

import styles from "./Menus.module.css";

const MenusContext = createContext();

export default function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const openMenu = setOpenId;
  const closeMenu = () => setOpenId("");

  return (
    <MenusContext.Provider
      value={{ openId, openMenu, closeMenu, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Menu({ children }) {
  return <div className={styles.menu}>{children}</div>;
}

function Toggle({ id }) {
  const { openId, openMenu, closeMenu, setPosition } = useContext(MenusContext);

  function handleClick(e) {
    e.stopPropagation();

    const rect = e.target.closest("button").getBoundingClientRect();

    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8, //8 it's a margin
    });

    openId === "" || openId !== id ? openMenu(id) : closeMenu();
  }

  return <button onClick={handleClick}>Toggle</button>;
}

function List({ children, id }) {
  const { openId, closeMenu, position } = useContext(MenusContext);

  const ref = useOutsideClick(closeMenu, false);

  if (openId !== id) return null;

  const style = {
    position: "fixed",
    backgroundColor: "#fff",
    boxShadow: "0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3)",
    borderRadius: "7px",
    right: position.x + "px",
    top: position.y + "px",
  };

  return createPortal(
    <ul ref={ref} style={style}>
      {children}
    </ul>,
    document.body
  );
}

function Button({ children, icon, onClick }) {
  const { closeMenu } = useContext(MenusContext);

  function handleClick() {
    onClick?.();
    closeMenu();
  }

  return (
    <li>
      <button className={styles.btn} onClick={handleClick}>
        {icon} <span>{children}</span>
      </button>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;
