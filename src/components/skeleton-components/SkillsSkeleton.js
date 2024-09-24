import React from "react";

export default function SkillsSkeleton() {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="h-8 w-48 bg-gray-300 dark:bg-gray-700 rounded-lg mb-4"></div>
      <div className="flex w-full h-full justify-between items-center overflow-x-scroll hide-scrollbar rounded-xl p-8 bg-cherry-main dark:bg-dracula-main">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <div
              className="flex flex-col min-w-60 max-w-60 min-h-28 rounded-xl shadow-xl overflow-hidden m-4 bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-5 animate-pulse"
              key={index}
            >
              <div className="flex flex-col items-center justify-center mt-4">
                <div className="h-6 w-24 bg-gray-400 dark:bg-gray-600 rounded-md mb-2"></div>
                <div className="relative size-16">
                  <svg
                    className="size-full -rotate-90"
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      className="stroke-current text-gray-400 dark:text-gray-600"
                      strokeWidth="4"
                    ></circle>
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      className="stroke-current text-gray-500 dark:text-gray-700"
                      strokeWidth="4"
                      strokeDasharray="100"
                      strokeDashoffset="100"
                      strokeLinecap="round"
                    ></circle>
                  </svg>
                  <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <div className="h-6 w-6 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex mt-4">
                  <div className="h-6 w-16 bg-gray-400 dark:bg-gray-600 rounded-lg mx-1"></div>
                  <div className="h-6 w-16 bg-gray-400 dark:bg-gray-600 rounded-lg mx-1"></div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
