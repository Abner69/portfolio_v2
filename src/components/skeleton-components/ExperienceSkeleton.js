import React from "react";

export default function ExperienceSkeleton() {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="h-8 w-48 bg-gray-300 dark:bg-gray-700 rounded-lg mb-4"></div>
      <div className="flex w-full h-full justify-between items-center overflow-x-scroll hide-scrollbar rounded-xl p-8 bg-cherry-main dark:bg-dracula-main">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="flex flex-col min-w-60 max-w-60 min-h-96 rounded-xl shadow-xl overflow-hidden m-4 bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-5 animate-pulse"
          >
            <div className="w-full h-32 bg-gray-300 dark:bg-gray-700" />
            <div className="flex flex-col items-center p-4">
              <div className="h-6 bg-gray-300 dark:bg-gray-700 w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 w-1/2 mb-2"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 w-1/2 mb-4"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 w-1/3 mb-4"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 w-full mb-2"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 w-full"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
