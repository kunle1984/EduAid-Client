import React, { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") setDarkMode(true);
  }, []);

  // Apply and save theme
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.documentElement.setAttribute(
      "data-bs-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div
        className={`min-vh-100 ${
          darkMode ? "bg-dark text-light " : "bg-light  text-dark"
        }`}
        style={{
          transition: "background-color 0.4s ease, color 0.4s ease",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
export const useTheme = () => useContext(ThemeContext);
