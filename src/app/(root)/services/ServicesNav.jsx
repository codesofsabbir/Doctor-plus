import React, { useEffect, useState } from "react";
import Image from "next/image";

function ServicesNav({ selectedTab }) {
  const navs = [
    {
      name: "Facial Procedures",
      url: "https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/solutions1.jpg",
    },
    {
      name: "Body Contouring",
      url: "https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/solutions2.jpg",
    },
    {
      name: "Breast Surgery",
      url: "https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/solutions3.jpg",
    },
    {
      name: "Hair Restoration",
      url: "https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/solutions4.jpg",
    },
    {
      name: "Skin Rejuvenation",
      url: "https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/solutions5.jpg",
    },
  ];

  const [currentImage, setCurrentImage] = useState(navs[0].url);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    setIsFading(true); // Start fading out
    setTimeout(() => {
      const newImage =
        navs.find((nav) => nav.name === selectedTab)?.url || navs[0].url;
      setCurrentImage(newImage);
      setIsFading(false); // Fade in new image
    }, 300); // 300ms transition duration
  }, [selectedTab]);

  return (
    <div className="w-full h-fit mb-5 md:mb-0">
      <div className="relative rounded-4xl after:hidden after:content-[''] after:absolute after:w-full after:h-full after:bg-[#72406063] after:top-0 after:left-0 overflow-hidden group hover:after:block">
        <h2 className="text-4xl font-semibold absolute top-1/2 left-1/2 -translate-1/2 text-[#fff] z-10 hidden group-hover:block">
          {selectedTab}
        </h2>
        <div
          className={`transition-opacity duration-1000 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          <Image
            src={currentImage}
            alt={selectedTab}
            width={500}
            height={500}
            className="w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default ServicesNav;
