import React from "react";
import useLanguageStore from "../store/useLanguageStore";

const translations = {
  uz: "Salom",    
  en: "Hello",    
  ru: "Привет",   
};

function WordTranslatorSelect() {
  const { language, setLanguage } = useLanguageStore();

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center shadow-md p-10 rounded-md">
        <h2>5-topshiriq</h2>
      <h1 className="text-4xl font-bold mb-4">{translations[language]}</h1>
      <select
        value={language}
        onChange={handleChange}
        className="px-4 py-2 border rounded"
      >
        <option value="uz">O'zbekcha</option>
        <option value="en">English</option>
        <option value="ru">Русский</option>
      </select>
    </div>
  );
}

export default WordTranslatorSelect;
