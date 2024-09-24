import { useLanguage } from "../context/LanguageContext";
import { useWizard } from "../context/WizardContext";
import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";

export default function MagicMessage({ handleClose }) {
  //Language Context
  const { language } = useLanguage();
  //Wizard Context
  const { toggleWizardState } = useWizard();
  //Text flags
  const [activeText, setActiveText] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  //Button flag
  const [showButtons, setShowButtons] = useState(false); // Estado para mostrar los botones
  //Messages to shown
  const messages = {
    en: [
      "[Processing request]",
      "The gears of time have been set in motion.",
      "You will soon be transported to the lair of the great code wizard:",
      "Abner Castellanos",
      "Do you wish the network of digital wisdom?",
    ],
    es: [
      "[Procesando solicitud]",
      "El engranaje del tiempo se ha puesto en marcha.",
      "Pronto serás transportado al recinto del gran hechicero del código:",
      "Abner Castellanos",
      "¿Deseas la red de sabiduría digital?",
    ],
  };
  //Select the language for messages
  const currentLanguageMessages = language === "en" ? messages.en : messages.es;

  //Activate the messages
  useEffect(() => {
    const timers = [];

    const activateText = (index) => {
      setActiveText((prev) => {
        const updated = [...prev];
        updated[index] = true;
        return updated;
      });
    };

    for (let i = 0; i < activeText.length; i++) {
      timers.push(
        setTimeout(() => {
          activateText(i);
        }, i * 2000)
      );
    }

    timers.push(
      setTimeout(() => {
        setShowButtons(true);
      }, activeText.length * 2000)
    );
    // Cleanup function to clear timers if the component unmounts
    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [activeText.length]);

  return (
    //Container Magic Message
    <div className="flex justify-center items-center fixed inset-0 z-50 bg-black bg-opacity-50">
      <div className="relative p-2 bg-swmg-back">
        <div className="flex flex-col w-full h-full ring-1 p-6 ring-swmg-display">
          {activeText[0] && (
            <p className="font-retro text-xl font-bold whitespace-pre-line text-swmg-display">
              {/*Displays message in typing style*/}
              <Typewriter
                options={{
                  strings: ">" + currentLanguageMessages[0],
                  autoStart: true,
                  loop: false,
                  delay: 10,
                  pauseFor: 2000,
                  cursor: "",
                }}
              />
            </p>
          )}
          {activeText[1] && (
            <p className="font-retro text-sm font-bold my-4 whitespace-pre-line text-swmg-display">
              <Typewriter
                options={{
                  strings: ">" + currentLanguageMessages[1],
                  autoStart: true,
                  loop: false,
                  delay: 10,
                  pauseFor: 2000,
                  cursor: "",
                }}
              />
            </p>
          )}
          {activeText[2] && (
            <p className="font-retro text-sm font-bold my-4 whitespace-pre-line text-swmg-display">
              <Typewriter
                options={{
                  strings: ">" + currentLanguageMessages[2],
                  autoStart: true,
                  loop: false,
                  delay: 10,
                  pauseFor: 2000,
                  cursor: "",
                }}
              />
            </p>
          )}
          {activeText[3] && (
            <p className="font-retro text-center text-sm font-bold my-4 whitespace-pre-line text-swmg-subtext">
              <Typewriter
                options={{
                  strings: "**" + currentLanguageMessages[3] + "**",
                  autoStart: true,
                  loop: false,
                  delay: 10,
                  pauseFor: 2000,
                  cursor: "",
                }}
              />
            </p>
          )}
          {activeText[4] && (
            <p className="font-retro text-sm font-bold my-4 whitespace-pre-line text-yellow-300">
              <Typewriter
                options={{
                  strings: ">" + currentLanguageMessages[4],
                  autoStart: true,
                  loop: false,
                  delay: 10,
                  pauseFor: 2000,
                  cursor: "",
                }}
              />
              {showButtons && (
                <div className="mt-4 text-center flex justify-center text-red-600">
                  <button
                    onClick={() => toggleWizardState(true)}
                    className="mx-4 text-swmg-display"
                  >
                    {language === "en" ? "[YES]" : " [SÍ]"}
                  </button>
                  <button
                    onClick={() => handleClose(true)}
                    className="ml-4 text-red-600"
                  >
                    [NO]
                  </button>
                  <Typewriter
                    options={{
                      strings: "",
                      autoStart: true,
                      loop: false,
                      delay: 10,
                      pauseFor: 2000,
                    }}
                  />
                </div>
              )}
            </p>
          )}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 pr-2 text-swmg-display"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}
