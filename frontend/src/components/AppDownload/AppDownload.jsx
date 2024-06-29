import React from "react";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div
      className="mt-16 flex flex-col items-center justify-center text-center"
      id="app-download"
    >
      <p className="font-semibold text-4xl">
        For Better Experience Download <br />
        Tomato App
      </p>
      <div className="flex items-center justify-center mt-10 mb-16">
        <img
          src={assets.play_store}
          alt="Play Store"
          className="mx-2 h-12 transition transform hover:scale-110"
        />
        <img
          src={assets.app_store}
          alt="App Store"
          className="mx-2 h-12 transition transform hover:scale-110"
        />
      </div>
    </div>
  );
};

export default AppDownload;
