import React from "react";

export default function Skeleton({ section, language }) {
  if (section === "About") {
    const listItems = [];

    // Utiliza un ciclo for para agregar elementos al array.
    for (let i = 1; i <= 4; i++) {
      listItems.push(<div className="skeleton h-4 w-12 m-2" key={i}></div>);
    }
    const listCards = [];

    // Utiliza un ciclo for para agregar elementos al array.
    for (let i = 1; i <= 4; i++) {
      listCards.push(<div className="skeleton h-12 w-12 m-2" key={i}></div>);
    }
    return (
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="max-w-sm mx-auto flex flex-col items-center">
            <div className="skeleton h-64 w-52"></div>
            <div className="flex flex-wrap mt-4 justify-center">
              {listItems}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="skeleton h-10 w-full m-4"></div>
            <div className="skeleton h-8 w-80"></div>
            <br />
            <div className="skeleton h-4 w-80 m-2"></div>
            <div className="skeleton h-4 w-80 m-2"></div>
            <br />
            <div className="skeleton h-4 w-16"></div>
            <div className="flex flex-wrap mt-4 justify-center">
              {listCards}
            </div>
            <br />
            <div className="skeleton h-4 w-16"></div>
            <div className="flex flex-wrap mt-4 justify-center">
              {listItems}
            </div>
            <br />
          </div>
        </div>
      </div>
    );
  }
  if (section === "Experience") {
    const listCarouselItems = [];
    for (let i = 1; i <= 4; i++) {
      listCarouselItems.push(
        <div
          className="carousel-item m-4 transition-transform duration-300 transform hover:scale-110 focus-within:scale-110 focus-within:border-blue-500 hover:m-4"
          key={i}
        >
          <div className="card w-64 shadow-xl hover:border hover:border-blue-500">
            <div className="skeleton h-32 w-60 m-2"></div>
            <div className="card-body">
              <div className="skeleton h-6 w-32"></div>
              <div className="skeleton h-4 w-48"></div>
              <div className="skeleton h-4 w-48"></div>
              <div className="skeleton h-4 w-48"></div>
              <div className="mt-2">
                <div className="skeleton h-4 w-12 m-2"></div>
                <div className="skeleton h-4 w-12 m-2"></div>
                <div className="skeleton h-4 w-12 m-2"></div>
                <div className="skeleton h-4 w-12 m-2"></div>
              </div>
              <div className="mt-2 flex">
                <div className="skeleton h-4 w-12 m-2"></div>
                <div className="skeleton h-4 w-12 m-2"></div>
                <div className="skeleton h-4 w-12 m-2"></div>
                <div className="skeleton h-4 w-12 m-2"></div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="flex flex-col items-center p-4">
        <h2 className="text-2xl font-bold mb-2 flex w-full justify-center">
          {language === "en" ? "Formal Experience" : "Experiencia Formal"}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle btn-ghost btn-xs text-info"
            >
              <svg
                tabIndex={0}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-4 w-4 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div
              tabIndex={0}
              className="card compact dropdown-content bg-base-100 rounded-box z-[1] w-64 shadow"
            >
              <div className="card glass">
                <div tabIndex={0} className="card-body ">
                  <div className="card-title text-sm">
                    {language === "en"
                      ? "Do you need to know how it works?"
                      : "¿Necesitas saber como funciona?"}
                  </div>
                  <div className="flex w-full justify-center gap-1 p-4">
                    {language === "en" ? "Press" : "Presiona"}
                    <kbd className="kbd kbd-xs">◀︎</kbd>
                    <kbd className="kbd kbd-xs">▶︎</kbd>
                    {language === "en" ? "to move" : "para mover"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </h2>
        <div className="carousel rounded-box flex w-full md:justify-center p-8 overflow-x-auto">
          {listCarouselItems}
        </div>
        <h2 className="text-2xl font-bold mb-2 flex w-full justify-center">
          {language === "en"
            ? "Freelancer Experience"
            : "Experiencia Freelancer"}
        </h2>
        <div className="carousel rounded-box flex w-full md:justify-center p-8 overflow-x-auto">
          {listCarouselItems}
        </div>
      </div>
    );
  }
  if (section === "Projects") {
    const listCarouselItems = [];
    for (let i = 1; i <= 4; i++) {
      listCarouselItems.push(
        <div
          className="carousel-item m-4 transition-transform duration-300 transform hover:scale-110 focus-within:scale-110 focus-within:border-blue-500 hover:m-4"
          key={i}
        >
          <div className="card w-64 shadow-xl hover:border hover:border-blue-500">
            <div className="skeleton h-32 w-60 m-2"></div>
            <div className="card-body">
              <div className="skeleton h-6 w-32"></div>
              <div className="skeleton h-4 w-48"></div>
              <div className="skeleton h-4 w-48"></div>
              <div className="skeleton h-4 w-48"></div>
              <div className="mt-2">
                <div className="skeleton h-4 w-12 m-2"></div>
                <div className="skeleton h-4 w-12 m-2"></div>
                <div className="skeleton h-4 w-12 m-2"></div>
                <div className="skeleton h-4 w-12 m-2"></div>
              </div>
              <div className="mt-2 flex">
                <div className="skeleton h-4 w-12 m-2"></div>
                <div className="skeleton h-4 w-12 m-2"></div>
                <div className="skeleton h-4 w-12 m-2"></div>
                <div className="skeleton h-4 w-12 m-2"></div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="flex flex-col items-center p-4">
        <h2 className="text-2xl font-bold mb-2 flex w-full justify-center">
          {language === "en" ? "Projects" : "Proyectos"}
        </h2>
        <div className="carousel rounded-box flex w-full md:justify-center p-8 overflow-x-auto">
          {listCarouselItems}
        </div>
      </div>
    );
  }
  if (section === "Skills") {
    const listCarouselItems = [];
    for (let i = 1; i <= 6; i++) {
      listCarouselItems.push(
        <div
          className="carousel-item card image-full w-64 m-4 shadow-xl hover:border hover:border-blue-500 transition-transform duration-300 transform hover:scale-110 focus-within:scale-110 hover:m-4"
          key={i}
        >
          <div className="skeleton h-32 w-60 m-2"></div>

          <div className="card-body flex flex-row flex-wrap">
            <div className="skeleton h-4 w-10 m-2"></div>
            <div
              className="radial-progress"
              style={{ "--value": 69, "--size": "3rem" }} // Empieza desde 0
              role="progressbar"
            >
              69% {/* Mostrar el número visible */}
            </div>
            <div className="mt-2 flex">
              <div className="skeleton h-4 w-12 m-2"></div>
              <div className="skeleton h-4 w-12 m-2"></div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="skills-section flex flex-col p-4">
        <h2 className="text-2xl font-bold flex w-full justify-center">
          {language === "en" ? "Skills" : "Habilidades"}
        </h2>
        <div className="carousel rounded-box flex w-full md:justify-center p-2 overflow-x-auto">
          {listCarouselItems}
        </div>
      </div>
    );
  }
}
