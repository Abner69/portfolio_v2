import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Contact({ contact }) {
  const { language } = useLanguage();
  const cleanPhoneNumber = (phone) => phone.replace(/\D/g, "");
  return (
    <div className="w-full flex flex-wrap justify-center items-center">
      <a
        className="flex flex-col min-h-[8rem] bg-cherry-orange shadow-xl w-32 items-center m-2 p-2 rounded-xl bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-5 hover:border hover:border-cherry-text-500 dark:hover:border-dracula-text-500 transition-transform duration-300 transform hover:scale-110 focus-within:scale-110 "
        href={`mailto:${contact.email}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-8 text-cherry-title dark:text-dracula-title"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
        <div className="flex flex-col items-center p-1">
          <div className="text-cherry-text dark:text-dracula-text">
            {language === "en" ? "Email" : "Correo"}
          </div>
          <div className="text-cherry-text text-sm text-center hover:underline dark:text-dracula-text">
            {contact.email.split("@")[0]}
            <br />@{contact.email.split("@")[1]}
          </div>
        </div>
      </a>

      <a
        className="flex flex-col min-h-[8rem] bg-cherry-orange shadow-xl w-32 items-center m-2 p-2 rounded-xl bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-5 hover:border hover:border-cherry-text-500 dark:hover:border-dracula-text-500 transition-transform duration-300 transform hover:scale-110 focus-within:scale-110"
        href={contact.github}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-8 text-cherry-title dark:text-dracula-title"
        >
          <path
            fill="currentColor"
            d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
          ></path>
        </svg>

        <div className="flex flex-col items-center p-1">
          <div className="text-cherry-text dark:text-dracula-text">GitHub</div>
          <div className="text-cherry-text dark:text-dracula-text text-sm text-center hover:underline">
            {language === "en" ? "GitHub Profile" : "GitHub de Linkedin"}
          </div>
        </div>
      </a>

      <a
        className="flex flex-col min-h-[8rem] bg-cherry-orange shadow-xl w-32 items-center m-2 p-2 rounded-xl bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-5 hover:border hover:border-cherry-text-500 dark:hover:border-dracula-text-500 transition-transform duration-300 transform hover:scale-110 focus-within:scale-110"
        href={contact.linkedin}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-8 text-cherry-title dark:text-dracula-title"
        >
          <path
            fill="currentColor"
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.06 2.06 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"
          ></path>
        </svg>
        <div className="flex flex-col items-center p-1">
          <div className="text-cherry-text dark:text-dracula-text">
            LinkedIn
          </div>
          <div className="text-cherry-text dark:text-dracula-text text-sm text-center hover:underline">
            {language === "en" ? "LinkedIn Profile" : "Perfil de Linkedin"}
          </div>
        </div>
      </a>

      <a
        className="flex flex-col min-h-[8rem] bg-cherry-orange shadow-xl w-32 items-center m-2 p-2 rounded-xl bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-5 hover:border hover:border-cherry-text-500 dark:hover:border-dracula-text-500 transition-transform duration-300 transform hover:scale-110 focus-within:scale-110"
        href={
          "https://api.whatsapp.com/send?phone=" +
          cleanPhoneNumber(contact.phone)
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-8 text-cherry-title dark:text-dracula-title"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>

        <div className="flex flex-col items-center p-1">
          <div className="text-cherry-text dark:text-dracula-text">
            {language === "en" ? "Phone" : "Telefono"}
          </div>
          <div className="text-cherry-text dark:text-dracula-text text-sm text-center hover:underline">
            {contact.phone}
          </div>
        </div>
      </a>
    </div>
  );
}
