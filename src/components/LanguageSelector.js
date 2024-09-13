import React, { useEffect, useRef, useState } from "react";

export const LanguageSelector = ({ setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Estado para mantener el idioma seleccionado
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Añadir el event listener cuando el dropdown está abierto
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang); // Actualiza el estado del idioma seleccionado
    setLanguage(lang); // Llama a la función externa para establecer el idioma
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex w-full px-4 py-2 text-sm font-medium rounded-md shadow-sm focus:outline-none text-white bg-cherry-text hover:text-cherry-title focus:ring-4 focus:ring-cherry-text-400 dark:bg-white dark:bg-opacity-15 dark:hover:bg-opacity-5 dark:text-dracula-text dark:focus:ring-dracula-text-900"
        >
          {selectedLanguage === "en" ? "English" : "Español"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="ml-1 size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 w-24 mt-2 origin-top-right rounded-md shadow-lg bg-cherry-main dark:bg-dracula-main">
          <div className="p-2">
            <button
              onClick={() => handleLanguageChange("en")}
              className="flex items-center text-center w-full px-2 py-2 my-2 text-sm text-cherry-text-900 hover:bg-black hover:bg-opacity-10 hover:rounded-xl focus:outline-none dark:text-dracula-title dark:hover:bg-white dark:hover:bg-opacity-15"
            >
              {selectedLanguage === "en" ? "English" : "Inglés"}
            </button>
            <button
              onClick={() => handleLanguageChange("es")}
              className="flex items-center text-center w-full px-2 py-2 my-2 text-sm text-cherry-text-900 hover:bg-black hover:bg-opacity-10 hover:rounded-xl focus:outline-none dark:text-dracula-title dark:hover:bg-white dark:hover:bg-opacity-15"
            >
              {selectedLanguage === "en" ? "Spanish" : "Español"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
