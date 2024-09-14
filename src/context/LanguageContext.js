import React, { createContext, useContext, useState } from "react";

// Crear el contexto
const LanguageContext = createContext();

// Proveedor del contexto
export const LanguageProvider = ({ children }) => {
  // Estado inicial del idioma basado en localStorage
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  // Función para cambiar el idioma y guardarlo en localStorage
  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useLanguage = () => useContext(LanguageContext);
