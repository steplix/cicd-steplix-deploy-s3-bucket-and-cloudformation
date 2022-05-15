/* eslint-disable @next/next/no-img-element */
import React from "react";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";

const StepCard = ({
    number,
    numberStyles,
    title,
    sizeTitle,
    emptyTitle,
    seeMore,
    colorLine,
    textOne,
    widthTexts,
    widthTextOne,
    textTwo,
    textThree,
    textFour,
    colorTitle,
    setisModalOpen,
    seeMoreLink,
    setPositionModal,
    icon,
    sizeText,
    textLeft,
    iconStyles,
}) => {
    const handleClick = () => {
        setisModalOpen(true);
        number === "01." && setPositionModal(1);
        number === "02." && setPositionModal(2);
        number === "03." && setPositionModal(3);
    };
    return (
        <Fade cascade>
            <div
                className={`${
                    textTwo ? "w-full" : "w-[330px] md:w-full xl:w-[300px]"
                } ${number ? "flex gap-2" : ""}`}
            >
                {number && !textLeft && (
                    <p
                        className={`${numberStyles} font-bold text--outlined text-7xl md:text-10xl lg:text-13xl xl:text-10xl`}
                    >
                        {number}
                    </p>
                )}
                <div>
                    <div className="flex">
                        {number && textLeft && (
                            <p
                                className={`${numberStyles} mr-2 font-bold text--outlined text-7xl md:text-10xl lg:text-13xl xl:text-10xl`}
                            >
                                {number}
                            </p>
                        )}
                        {title && textLeft && (
                            <h2
                                className={`w-[130px] md:w-full ${
                                    sizeTitle ? sizeTitle : ""
                                } ${colorTitle ? colorTitle : "text-white"}`}
                            >
                                {title}
                                {emptyTitle && (
                                    <span className="text--outlined">
                                        {emptyTitle}
                                    </span>
                                )}
                            </h2>
                        )}
                    </div>

                    <div className="flex">
                        {title && !textLeft && (
                            <h2
                                className={`${sizeTitle ? sizeTitle : ""} ${
                                    colorTitle ? colorTitle : "text-white"
                                }`}
                            >
                                {title}
                                {emptyTitle && (
                                    <span className="text--outlined">
                                        {emptyTitle}
                                    </span>
                                )}
                            </h2>
                        )}
                        {icon && (
                            <div
                                className={`flex h-14 w-[120px] ${
                                    !iconStyles && "pl-3 xl:pl-10"
                                }`}
                            >
                                {" "}
                                <img
                                    src={icon}
                                    alt="values"
                                    className={`my-auto ${
                                        iconStyles ||
                                        "xl:h-14 xl:w-[120px] w-[66px] h-[30px]"
                                    }`}
                                />
                            </div>
                        )}
                    </div>

                    {colorLine && (
                        <div
                            className={`${
                                textLeft && "ml-16 xl:ml-[125px]"
                            } h-1 w-12 xl:w-28 xl:h-2 my-4 xl:my-10 ${colorLine}`}
                        />
                    )}

                    <div className={`${widthTexts} xl:w-[250px]`}>
                        {textOne && (
                            <p
                                className={`${
                                    sizeText || "paragraph"
                                } pb-3 xl:pb-6 ${
                                    widthTextOne ? widthTextOne : ""
                                }`}
                            >
                                {textOne}
                            </p>
                        )}
                        {textTwo && (
                            <p className={sizeText || "paragraph pb-3 xl:pb-6"}>
                                {textTwo}
                            </p>
                        )}
                        {textThree && (
                            <p className={sizeText || "paragraph pb-3 xl:pb-6"}>
                                {textThree}
                            </p>
                        )}
                        {textFour && (
                            <p className={sizeText || "paragraph"}>
                                {textFour}
                            </p>
                        )}
                    </div>

                    {seeMore && setisModalOpen && (
                        <button
                            onClick={handleClick}
                            className="text-base text-yellow underline decoration-2 mt-5"
                        >
                            {seeMore}
                        </button>
                    )}
                    {seeMore && seeMoreLink && (
                        <button className="lg:text-2xl text-sm text-yellow underline decoration-2 mt-2">
                            {seeMore}
                        </button>
                    )}
                </div>
            </div>
        </Fade>
    );
};

//
// PropTypes
//
StepCard.propTypes = {
    number: PropTypes.string,
    title: PropTypes.string,
    sizeTitle: PropTypes.string,
    emptytitle: PropTypes.string,
    seeMore: PropTypes.string,
    colorLine: PropTypes.string,
    colorTitle: PropTypes.string,
    textOne: PropTypes.string,
    widthTextOne: PropTypes.string,
    textTwo: PropTypes.string,
    textThree: PropTypes.string,
    textFour: PropTypes.string,
    icon: PropTypes.string,
    sizeTitle: PropTypes.string,
    numberStyles: PropTypes.string,
    iconStyles: PropTypes.string,
};

export default StepCard;
