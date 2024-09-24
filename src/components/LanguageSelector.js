import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export const LanguageSelector = () => {
  //Language Context
  const { language, handleLanguageChange } = useLanguage();
  //Hook to see if the dropdown are open
  const [isOpen, setIsOpen] = useState(false);
  //Dropdown Reference
  const dropdownRef = useRef(null);

  //Hande if someone makes click outside of the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    //Add the event listener when the dropdown is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    //Clear the event listener when the component is unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  //Close the dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  //Change the language and close the dropdown
  const handleSelectedLanguage = (lang) => {
    handleLanguageChange(lang);
    setIsOpen(!isOpen);
  };

  return (
    //Container Dropdown button
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex w-full font-medium text-sm shadow-sm rounded-md px-4 py-2 focus:outline-none text-white bg-cherry-text hover:text-cherry-title focus:ring-4 focus:ring-cherry-text-400 dark:bg-white dark:bg-opacity-15 dark:hover:bg-opacity-5 dark:text-dracula-text dark:focus:ring-dracula-text-900"
        >
          {language === "en" ? "English" : "Español"}
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
              onClick={() => handleSelectedLanguage("en")}
              className="flex w-full items-center text-sm text-center px-2 py-2 my-2 text-cherry-text-900 hover:bg-black hover:bg-opacity-10 hover:rounded-xl focus:outline-none dark:text-dracula-title dark:hover:bg-white dark:hover:bg-opacity-15"
            >
              {language === "en" ? "English" : "Inglés"}
            </button>
            <button
              onClick={() => handleSelectedLanguage("es")}
              className="flex w-full items-center text-sm text-center px-2 py-2 my-2 text-cherry-text-900 hover:bg-black hover:bg-opacity-10 hover:rounded-xl focus:outline-none dark:text-dracula-title dark:hover:bg-white dark:hover:bg-opacity-15"
            >
              {language === "en" ? "Spanish" : "Español"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
