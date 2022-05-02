import React from "react";
import Fade from "react-reveal/Fade";

const ModalCard = ({ subDescription, bgColor, textColor, bgLine }) => {
    return (
        <Fade cascade>
            <div
                className={`${bgColor} ${textColor} flex paragraph rounded-2xl flex-col w-full h-full text-center justify-center my-auto`}
            >
                <div
                    className={`${bgLine} h-[164px] absolute w-2 ml-3 rounded`}
                />
                <div
                    className={`${textColor} paragraph  w-[350px] text-center pl-8`}
                >
                    {subDescription}
                </div>
            </div>
        </Fade>
    );
};

export default ModalCard;
