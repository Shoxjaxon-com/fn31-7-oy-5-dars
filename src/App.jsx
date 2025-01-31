import React, { useEffect } from "react";
import useThemeStore from "./store/useThemeStore";
import Moon from "./assets/moon.svg";
import Todo from "./componets/Todo";

function App() {
  const { theme, changeTheme } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div
    className={`min-h-screen ${
      theme === "dark" ? "bg-gray-700 text-white" : "bg-white text-black"
    }`}
    >
      <header className="w-full flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800">
        <h1 className="text-xl font-bold">7-oy 5-dars</h1>
        <button onClick={changeTheme}>
          <img className="w-[30px]" src={Moon} alt="Toggle Theme" />
        </button>
      </header>

      <div className="w-full flex flex-col items-center gap-5 mt-10 mb-10">
        <Todo />
      </div>
    </div>
  );
}

export default App;
