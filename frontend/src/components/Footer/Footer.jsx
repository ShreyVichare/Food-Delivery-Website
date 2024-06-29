import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 pt-16 px-8vw">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center md:flex-row md:justify-between md:items-start md:gap-8">
        {/* Left Section */}
        <div className="text-center md:text-left md:w-1/3">
          <img src={assets.logo} alt="Logo" className="mb-4" />
          <p>© 2024 Bundl Technologies Pvt. Ltd</p>
          <div className="flex gap-4 mt-4 cursor-pointer">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        {/* Center Section */}
        <div className="mt-8 md:mt-0">
          <h2 className="mb-4 font-semibold text-lg">COMPANY</h2>
          <ul className="cursor-pointer">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="mt-8 md:mt-0">
          <h2 className="mb-4 font-bold text-lg">GET IN TOUCH</h2>
          <ul>
            <li>+91-323-442-5552</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>

      {/* Divider */}

      {/* Copyright */}
      <p className="text-center mt-7  pb-5">Copyright © 2010 by Smash</p>
    </footer>
  );
};

export default Footer;
