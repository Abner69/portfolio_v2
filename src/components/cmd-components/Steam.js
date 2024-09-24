import React from "react";
import { useLanguage } from "../../context/LanguageContext";

//Data of Steam User
const userData = {
  display_name: "El Pipiripau",
  followers: { total: 21 },
  images: [
    {
      url: "https://avatars.akamai.steamstatic.com/cab494de58704142646ea694687ec8707a9fddac_full.jpg",
    },
  ],
  external_urls: { steam: "https://steamcommunity.com/id/laperrasucia/" },
};
export default function Steam() {
  //Language Context
  const { language } = useLanguage();

  return (
    //Container for Steam in CMD
    <div className="flex flex-col  items-center lg:flex-row">
      <img
        className="size-16"
        src={userData.images[0]?.url}
        alt={userData.display_name}
      />
      <div className="flex flex-col ml-4">
        <h1>{userData.display_name}</h1>

        <p>
          {language === "en" ? "Followers: " : "Seguidores: "}
          {userData.followers.total}
        </p>
        <p>
          {language === "en" ? "Url: " : "Enlace: "}
          <a
            href={userData.external_urls.steam}
            target="_blank"
            rel="noopener noreferrer"
            className="text-swmg-subtext hover:text-swmg-text"
          >
            {userData.external_urls.steam}
          </a>
        </p>
      </div>
    </div>
  );
}
