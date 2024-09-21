import React from "react";
import { useLanguage } from "../context/LanguageContext";

const userData = {
  display_name: "Pashiludo",
  followers: { total: 24 },
  images: [
    {
      url: "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-1/459044510_2783912925106016_3256528271292473041_n.jpg?stp=c8.0.628.628a_cp0_dst-jpg_s50x50&_nc_cat=100&ccb=1-7&_nc_sid=6738e8&_nc_ohc=6QN9lugi0JYQ7kNvgEFLxQM&_nc_ht=scontent-atl3-1.xx&edm=AP4hL3IEAAAA&_nc_gid=AuS1R4hrVHP_W7jIkF4Vtw2&oh=00_AYBIdQP5ASdF5R4v1oSBqXS4mXmt_guh2_BlCKakxkpNVg&oe=66F326A7",
    },
  ],
  external_urls: { spotify: "https://open.spotify.com/user/pashiludo" },
};

export default function Spotify() {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col lg:flex-row items-center">
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
            href={userData.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="text-swmg-subtext hover:text-swmg-text"
          >
            {userData.external_urls.spotify}
          </a>
        </p>
      </div>
    </div>
  );
}
