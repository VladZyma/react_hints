import { createContext, useContext, useState, useCallback } from "react";

const MenuContext = createContext();

export default function Menu({ children }) {
  const [showGroup, setShowGroup] = useState("");

  const setGroup = useCallback((name) => {
    return setShowGroup((group) => (group === name ? "" : name));
  }, []);

  return (
    <MenuContext.Provider value={{ showGroup, setGroup }}>
      {children}
    </MenuContext.Provider>
  );
}

function Group({ children, name }) {
  const { showGroup, setGroup } = useContext(MenuContext);

  const isShow = showGroup === name;

  return (
    <div>
      <button onClick={() => setGroup(name)}>{name}</button>
      {isShow && <ul>{children}</ul>}
    </div>
  );
}

function Item({ children, to }) {
  return (
    <li>
      <a href={to}>{children}</a>
    </li>
  );
}

Menu.Group = Group;
Menu.Item = Item;
