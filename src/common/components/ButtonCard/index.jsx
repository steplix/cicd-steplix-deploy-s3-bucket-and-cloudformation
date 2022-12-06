import React from "react";
import Image from "next/image";
const ButtonCard = ({clickEvent, label="Button", buttonImage = null}) => {
  return (
    <button
      className="flex flex-row justify-center bg-blue active:bg-sky-active text-white w-28 h-7 rounded-xl gap-y-2.5"
      title=""
      alt={label}
      type="button"
      onClick={clickEvent}
    >
        {buttonImage ? <Image src={buttonImage} width={12} height={30} alt="Button Image" /> : null}
      <label className="px-4">{label}</label>
    </button>
  );
};

export default ButtonCard;
