import React, { useState, useEffect } from "react";
import sudotext from "../assets/sudotext.txt";
import { useLanguage } from "../context/LanguageContext";

export default function Sudo() {
  const [displayedLines, setDisplayedLines] = useState([]);
  const { language } = useLanguage();
  const [isEnded, setIsEnded] = useState(false);
  // Función para leer el archivo de texto y dividirlo en líneas
  useEffect(() => {
    fetch(sudotext)
      .then((response) => response.text())
      .then((text) => {
        const linesArray = text.split("\n");
        displayLines(linesArray); // Llama a la función para mostrar líneas
      })
      .catch((error) => console.error("Error leyendo el archivo:", error));
  }, []);

  // Función para mostrar líneas con retraso
  const displayLines = async (linesArray) => {
    for (let i = 0; i < linesArray.length; i++) {
      setDisplayedLines((prev) => [...prev, linesArray[i]]); // Añade la línea al estado
      await new Promise((resolve) => setTimeout(resolve, 100)); // Espera 20 ms
    }
    setIsEnded(true);
  };

  return (
    <div>
      {displayedLines.map((line, index) => (
        <div className="text-red-700" key={index}>
          {line}
        </div>
      ))}
      {displayedLines.map((line, index) => (
        <div className="text-red-700" key={index}>
          {line}
        </div>
      ))}
      {displayedLines.map((line, index) => (
        <div className="text-red-700" key={index}>
          {line}
        </div>
      ))}
      {isEnded ? (
        <div className="text-swmg-text">
          😁😁{language === "en" ? "Nothing happens" : "Nada pasó"}😁😁
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
