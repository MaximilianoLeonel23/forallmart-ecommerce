import React from "react";

const Banner = () => {
  return (
    <section className="w-full bg-white border border-gray-200 rounded">
      <div>
        <img
          className="w-full h-56 sm:h-banner object-cover"
          src="src\assets\bannerimg-2.png"
          alt="banner"
        />
      </div>
    </section>
  );
};

export default Banner;
