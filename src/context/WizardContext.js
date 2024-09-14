// src/context/WizardContext.js
import React, { createContext, useContext, useState } from "react";

// Crear el contexto
const WizardContext = createContext();

// Proveedor del contexto
export const WizardProvider = ({ children }) => {
  const [isWizardActive, setIsWizardActive] = useState(false);

  const toggleWizardState = () => {
    setIsWizardActive(!isWizardActive);
  };

  return (
    <WizardContext.Provider value={{ isWizardActive, toggleWizardState }}>
      {children}
    </WizardContext.Provider>
  );
};

// Hook personalizado para acceder al contexto de forma sencilla
export const useWizard = () => useContext(WizardContext);
