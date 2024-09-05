import React from "react";

export const LanguageSelector = ({ setLanguage }) => {
  return (
    <div className="dropdown dropdown-hover dropdown-end">
      <div tabIndex={0} role="button">
        <svg
          className="swap-on h-7 w-7 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth={2}
          >
            <path
              strokeLinejoin="round"
              d="M14 19c3.771 0 5.657 0 6.828-1.172S22 14.771 22 11s0-5.657-1.172-6.828S17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172S2 7.229 2 11s0 5.657 1.172 6.828c.653.654 1.528.943 2.828 1.07"
            ></path>
            <path d="M14 19c-1.236 0-2.598.5-3.841 1.145c-1.998 1.037-2.997 1.556-3.489 1.225s-.399-1.355-.212-3.404L6.5 17.5"></path>
            <path
              strokeLinejoin="round"
              d="m5.5 13.5l1-2m0 0l1.106-2.211a1 1 0 0 1 1.788 0L10.5 11.5m-4 0h4m0 0l1 2m1-6h1.982V9c0 .5-.496 1.5-1.487 1.5m3.964-3v2m0 0v4m0-4H18.5"
            ></path>
          </g>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-secondary rounded-box z-[1] w-32 p-1 shadow"
      >
        <li>
          <p onClick={() => setLanguage("en")}>English</p>
        </li>
        <li>
          <p onClick={() => setLanguage("es")}>Español</p>
        </li>
      </ul>
    </div>
  );
};
