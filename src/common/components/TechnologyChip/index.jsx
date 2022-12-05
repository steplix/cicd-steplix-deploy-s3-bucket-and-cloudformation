import React from "react";
import Image from "next/image";
import tagImage from "@/public/assets/img/tag-image.png";

const Chip = ({ label = "Front End", image = tagImage }) => {
  return (
    <div className="w-[120px] h-[30px] text-purple-light border border-purple-light rounded-3xl">
      <div className="flex flex-row w-[112px] h-[30px] items-center ">
        <div
          style={{
            marginLeft: "10px",
            paddingRight: "8px",
            marginTop: "5px"
          }}
        >
          <Image alt="Front End Logo" height={20} src={image} width={15} />
        </div>
        <div className="mb-1">{label}</div>
      </div>
    </div>
  );
};

export default Chip;
