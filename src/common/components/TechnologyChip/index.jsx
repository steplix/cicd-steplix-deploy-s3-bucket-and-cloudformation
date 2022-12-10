import React from "react";
import Image from "next/image";
import tagImage from "@/public/static/tag-image.png";

const Chip = ({ label = "Front End", image = null, alt, customClass = "" }) => {
  return (
    <div className="w-[120px] h-[30px] text-purple-light border border-purple-light rounded-3xl">
      <div className="flex flex-row justify-center w-fit items-center">
        {image ? (
          <img
            alt={alt}
            height="20"
            src={image}
            width="15"
            className={customClass}
          />
        ) : null}
        <label className={image ? "ml-2" : ""}>{label}</label>
      </div>
    </div>
  );
};

export default Chip;
