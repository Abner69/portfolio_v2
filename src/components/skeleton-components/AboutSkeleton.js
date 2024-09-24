import React from "react";

export default function AboutSkeleton() {
  return (
    <div className="m-4 p-8 rounded-lg bg-cherry-main dark:bg-dracula-main animate-pulse">
      <div className="flex flex-col md:flex-row ">
        {/* Imagen */}
        <div className="lg:w-2/5 mx-auto flex flex-col items-center lg:justify-center">
          <div className="rounded-lg bg-gray-300 dark:bg-gray-700 w-52 h-52" />
          {/* Soft skills skeleton */}
          <div className="flex flex-wrap mt-4 justify-center">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="m-1 py-1 px-4 rounded-2xl bg-gray-300 dark:bg-gray-700 w-20 h-6"
              />
            ))}
          </div>
        </div>

        {/* Información del perfil */}
        <div className="flex flex-col items-center lg:w-3/5">
          <div className="h-10 w-48 bg-gray-300 dark:bg-gray-700 rounded-lg mt-4" />
          <div className="h-6 w-64 bg-gray-300 dark:bg-gray-700 rounded-lg mt-4" />
          <div className="h-8 w-56 bg-gray-300 dark:bg-gray-700 rounded-lg mt-4" />

          {/* Descripción */}
          <div className="h-28 w-full bg-gray-300 dark:bg-gray-700 rounded-lg mt-6" />

          {/* Contact & Interests */}
          <div className="h-6 w-32 bg-gray-300 dark:bg-gray-700 rounded-lg mt-6" />
          <div className="h-6 w-40 bg-gray-300 dark:bg-gray-700 rounded-lg mt-6" />
          <div className="flex flex-wrap justify-center items-center mt-4">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="m-1 py-1 px-4 rounded-2xl bg-gray-300 dark:bg-gray-700 w-24 h-6"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
