import React from "react";
import { useWizard } from "../context/WizardContext";
import Logo from "../assets/Logo";

export default function TopTerminal() {
  const { toggleWizardState } = useWizard();
  return (
    <div className="flex justify-between items-center">
      <div className="m-2">
        <Logo width={"w-6"} />
      </div>
      <div class="p-2 text-center text-swmg-text">
        <a href="https://github.com/abner69/">abner69@pipiripau420MM</a>
      </div>
      <button onClick={() => toggleWizardState(false)} className="m-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 text-cherry-title dark:text-dracula-title"
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
