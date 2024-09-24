import React from "react";

import TopTerminal from "./TopTerminal";
import PresentationTerminal from "./PresentationTerminal";
import Terminal from "./Terminal";

export default function SWMG() {
  return (
    <div className="min-h-screen bg-swmg-back p-2">
      <div className="min-h-screen ring-1 font-retro rounded-md ring-swmg-display">
        <TopTerminal />
        <hr className="border-swmg-display" />
        <PresentationTerminal />
        <Terminal />
      </div>
    </div>
  );
}
