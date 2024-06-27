import React from "react";

const Header = () => {
  return (
    <div
      style={{ backgroundImage: 'url("/header_img.png")' }}
      className="relative justify-center h-[34vw]  bg-contain bg-no-repeat items-center ml-[9%] mt-14 "
    >
      <div
        alt="header-contents"
        className=" absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw]"
      >
        <h2 className=" font-sans text-white text-6xl font-we font-medium animate-fade">
          Order your<br></br> favourite food here
        </h2>
        <p className="text-white font-size-[101vw] animate-fade">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy and elevate your dining experience, one
          delicious meal at a time
        </p>
        <button className="py-3 px-7 border bg-white text-slate-700 hover:bg-gray-100 font-medium rounded-full w-100">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
