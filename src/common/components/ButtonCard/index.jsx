import React from "react";

const ButtonCard = ({
  clickEvent,
  label = "Button",
  buttonImage = null,
  title = label,
}) => {
  return (
    <button
      className="w-fit h-fit bg-blue hover:cursor-pointer active:bg-sky-active text-white rounded-xl gap-y-2.5"
      title={title}
      alt={label}
      type="button"
      onClick={clickEvent}
    >
      <div className="flex flex-row items-center mx-3 my-1">
        {buttonImage ? (
          <img src={buttonImage} width="15" height="30" alt="Button Image" />
        ) : null}
        <label className={buttonImage ? "ml-2" : null}>{label}</label>
      </div>
    </button>
  );
};

export default ButtonCard;
