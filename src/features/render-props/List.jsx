import { useState } from "react";

function List({ title, items, render }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const displayItems = isCollapsed ? items.slice(0, 3) : items;

  function toggleOpen() {
    setIsOpen(!isOpen);
    setIsCollapsed(true);
  }

  return (
    <>
      <h3>{title}</h3>
      <button onClick={toggleOpen}>
        {isOpen ? <span>&or;</span> : <span>&and;</span>}
      </button>

      {isOpen && <ul>{displayItems.map(render)}</ul>}

      <button onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? "Show more ⬇" : "Show less ⬆"}
      </button>
    </>
  );
}

export default List;
