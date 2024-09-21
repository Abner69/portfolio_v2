import React, { useState, useRef } from "react";
import Commands from "./Commands";

export default function Terminal() {
  const [command, setCommand] = useState(""); // Comando actual
  const [history, setHistory] = useState([]); // Historial de comandos
  const [response, setResponse] = useState([]);
  const inputRef = useRef(null); // Referencia para el input
  // Maneja los comandos
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      processCommand(command);
      setCommand(""); // Limpia el input
    }
  };
  console.log(history);
  // Procesar los comandos del usuario
  const processCommand = (cmd) => {
    setHistory((prev) => [...prev, cmd]);
    if (cmd === "clear") {
      setResponse([]); // Limpia el historial si el comando es 'clear'
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
    <div className="p-4 text-lg overflow-auto hide-scrollbar text-swmg-subtext h-full">
      <span class="text-swmg-cmdtext ">
        Welcome to my portfolio! — Type{" "}
        <span class="text-swmg-cmdtext-100">help</span> for a list of supported
        commands.
      </span>
      <div className="h-full">
        {response.map((entry, index) => (
          <div key={index} className="mb-2">
            <span className="text-swmg-text">[abner69@pipiripau420MM]~$ </span>
            <span>{entry.command}</span>
            <div className="ml-4 text-[#7d82d7db]">{entry.result}</div>
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
            className="bg-transparent outline-none w-full"
          />
        </div>
      </div>
    </div>
  );
}
