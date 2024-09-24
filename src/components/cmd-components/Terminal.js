import React, { useState, useRef } from "react";
import Commands from "./Commands";
import { useLanguage } from "../../context/LanguageContext";

export default function Terminal() {
  //Language Context
  const { language } = useLanguage();
  //Actual command
  const [command, setCommand] = useState("");
  //Command History
  const [history, setHistory] = useState([]);
  //Response in terminal
  const [response, setResponse] = useState([]);
  //Refference to input
  const inputRef = useRef(null);

  //Manage the commands
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      processCommand(command);
      setCommand("");
    }
  };

  //Proccess the commands
  const processCommand = (cmd) => {
    setHistory((prev) => [...prev, cmd]);
    if (cmd === "clear") {
      setResponse([]);
    } else {
      setResponse((prev) => [
        ...prev,
        {
          command: cmd,
          result: <Commands cmd={cmd} history={history} />,
        },
      ]);
    }
  };

  return (
    //Terminal container
    <div className=" h-full text-lg p-4 overflow-auto hide-scrollbar text-swmg-subtext">
      <span class="text-swmg-cmdtext ">
        {language === "en"
          ? "Welcome to my portfolio! — Type "
          : "!Bienvenido a mi portafolio! - Escriba "}
        <span class="text-swmg-cmdtext-100">help</span>{" "}
        {language === "en"
          ? "for a list of supported commands."
          : "para ver la lista de comandos."}
      </span>
      <div className="h-full">
        {response.map((entry, index) => (
          <div key={index} className="mb-2">
            <span className="text-swmg-text">[abner69@pipiripau420MM]~$ </span>
            <span>{entry.command}</span>
            <div className="ml-4 text-swmg-cmdtext">{entry.result}</div>
          </div>
        ))}

        {/* Input del comando actual */}
        <div className="flex">
          <span className="text-swmg-text">[abner69@pipiripau420MM]~$ </span>
          <input
            ref={inputRef}
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full outline-none bg-transparent"
          />
        </div>
      </div>
    </div>
  );
}
