import React from "react";

export default function Commands({ cmd, history }) {
  switch (cmd) {
    case "help":
      return (
        <div className="text-swmg-cmdtext-100 text-lg">
          whoami
          <br />
          <span className="ml-2">↳</span>&nbsp;
          <span className="text-swmg-cmdtext">Displays Who I am?</span>
          <br />
          experience
          <br />
          <span className="ml-2">↳</span>&nbsp;
          <span className="text-swmg-cmdtext">Lists my work experience. </span>
          <br />
          projects
          <br />
          <span className="ml-2">↳</span>&nbsp;
          <span className="text-swmg-cmdtext">View coding projects. </span>
          <br />
          history
          <br />
          <span className="ml-2">↳</span>&nbsp;
          <span className="text-swmg-cmdtext">View command history. </span>
          <br />
          help
          <br />
          <span className="ml-2">↳</span>&nbsp;
          <span className="text-swmg-cmdtext">Displays this help msg. </span>
          <br />
          sudo
          <br />
          <span className="ml-2">↳</span>&nbsp;
          <span className="text-swmg-cmdtext">Try it out for yourself. </span>
          <br />
          clear
          <br />
          <span className="ml-2">↳</span>&nbsp;
          <span className="text-swmg-cmdtext">Clear terminal.</span>
        </div>
      );
    case "whoami":
      return <span className="underline">Hey, I'm Abner!👋</span>;

    case "history":
      return history.map((entry, index) => <div key={index}>{entry}</div>);

    default:
      return (
        <span>
          Command not found — Type{" "}
          <span class="text-swmg-cmdtext-100">help</span> for a list of
          supported commands.
        </span>
      );
  }
}
