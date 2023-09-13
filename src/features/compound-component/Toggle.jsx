import { createContext, useContext, useState } from "react";

const ToggleContext = createContext();

export default function Toggle({ children }) {
  const [isDark, setIsDark] = useState(false);

  function toggleTheme() {
    setIsDark((dark) => !dark);
  }

  return (
    <ToggleContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ToggleContext.Provider>
  );
}

function Button({ type }) {
  const { isDark, toggleTheme } = useContext(ToggleContext);

  const style =
    type === "rounded"
      ? {
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          textAlign: "center",
          cursor: "pointer",
        }
      : {
          width: "30px",
          height: "30px",
          textAlign: "center",
          cursor: "pointer",
        };

  return (
    <button style={style} onClick={toggleTheme}>
      {isDark ? "🌞" : "🌙"}
    </button>
  );
}

function Label() {
  const { isDark } = useContext(ToggleContext);

  return <span>{isDark ? "Dark theme" : "Light theme"}</span>;
}

Toggle.Button = Button;
Toggle.Label = Label;
