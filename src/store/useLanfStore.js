import { create } from "zustand";

const useLanguageStore = create((set) => ({
  language: "uz", // Default til - O‘zbekcha
  setLanguage: (lang) => set({ language: lang }),
}));

export default useLanguageStore;
