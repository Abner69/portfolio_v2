import React from "react";
import { useWizard } from "../../context/WizardContext";
import Logo from "../../assets/Logo";

export default function TopTerminal() {
  //Wizard context
  const { toggleWizardState } = useWizard();

  return (
    //Top of terminal
    <div className="flex justify-between items-center">
      <div className="m-2">
        <Logo width={"w-6"} />
      </div>
      <div class="text-center p-2 text-swmg-text">
        <a href="https://github.com/abner69/">abner69@pipiripau420MM</a>
      </div>
      <button onClick={() => toggleWizardState(false)} className="m-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 text-swmg-text"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
