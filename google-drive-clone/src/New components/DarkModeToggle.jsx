import React, { useState } from "react";

const DarkModeToggle = () => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");
    setDark(!dark);
  };

  return (
    <button onClick={toggleTheme}>
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;