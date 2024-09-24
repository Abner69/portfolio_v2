import React, { useState, useEffect } from "react";
import sudotext from "../../assets/sudotext.txt";
import { useLanguage } from "../../context/LanguageContext";

export default function Sudo() {
  //Language Context
  const { language } = useLanguage();
  //Data to display
  const [displayedLines, setDisplayedLines] = useState([]);
  //Flag to verify if the messages end
  const [isEnded, setIsEnded] = useState(false);

  //Fetching data form file
  useEffect(() => {
    fetch(sudotext)
      .then((response) => response.text())
      .then((text) => {
        const linesArray = text.split("\n");
        displayLines(linesArray);
      })
      .catch((error) => console.error("Error leyendo el archivo:", error));
  }, []);

  //Function to show lines with a delay
  const displayLines = async (linesArray) => {
    for (let i = 0; i < linesArray.length; i++) {
      setDisplayedLines((prev) => [...prev, linesArray[i]]);
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    setIsEnded(true);
  };

  return (
    //Container for Sudo messages
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
