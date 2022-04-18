import React from "react";

const ModalCard = ({ subDescription, bgColor, textColor, bgLine }) => {
    console.log(textColor);
    return (
        <div
            className={`${bgColor} ${textColor} flex p-steplix rounded-2xl flex-col w-full h-full text-center justify-center my-auto`}
        >
            <div className={`${bgLine} h-[164px] absolute w-2 ml-3 rounded`} />
            <div
                className={`${textColor} p-steplix  w-[350px] text-center pl-8`}
            >
                {subDescription}
            </div>
        </div>
    );
};

export default ModalCard;
