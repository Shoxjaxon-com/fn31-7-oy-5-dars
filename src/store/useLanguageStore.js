// src/store/useLanguageStore.js
import { create } from "zustand";

// Zustand do'koni orqali til holatini saqlash
const useLanguageStore = create((set) => ({
  language: "uz", // Boshlang'ich til: O'zbekcha
  // Tilni yangilash uchun funksiya
  setLanguage: (lang) => set({ language: lang }),
}));

export default useLanguageStore;
