import { create } from "zustand";

const getSavedTheme = () => {
  return localStorage.getItem("theme") || "light";
};

const useThemeStore = create((set) => ({
  theme: getSavedTheme(),
  changeTheme: () => {
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";

      localStorage.setItem("theme", newTheme);

      return { theme: newTheme };
    });
  },
}));

export default useThemeStore;
