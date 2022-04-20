/* eslint-disable @next/next/no-img-element */
import React from "react";
import PropTypes from "prop-types";

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
    modal,
}) => {
    const handleClick = () => {
        setisModalOpen(true);
        number === "01." && setPositionModal(1);
        number === "02." && setPositionModal(2);
        number === "03." && setPositionModal(3);
    };
    return (
        <div
            className={`${textTwo ? "w-full" : "w-[330px] lg:w-full"} ${
                number ? "flex gap-2" : ""
            }`}
        >
            {number && !modal && (
                <p
                    className={`${numberStyles} number-steplix number-steplix--outlined h2-steplix`}
                >
                    {number}
                </p>
            )}
            <div>
                <div className="flex">
                    {number && modal && (
                        <p
                            className={`${numberStyles} number-steplix number-steplix--outlined h2-steplix mr-2`}
                        >
                            {number}
                        </p>
                    )}
                    {title && modal && (
                        <h2
                            className={`h2-steplix w-[130px] md:w-full ${
                                sizeTitle ? sizeTitle : ""
                            } ${colorTitle ? colorTitle : "text-white"}`}
                        >
                            {title}
                            {emptyTitle && (
                                <span className="h2-steplix h2-steplix--outlined">
                                    {emptyTitle}
                                </span>
                            )}
                        </h2>
                    )}
                </div>

                <div className="flex">
                    {title && !modal && (
                        <h2
                            className={`h2-steplix ${
                                sizeTitle ? sizeTitle : ""
                            } ${colorTitle ? colorTitle : "text-white"}`}
                        >
                            {title}
                            {emptyTitle && (
                                <span className="h2-steplix h2-steplix--outlined">
                                    {emptyTitle}
                                </span>
                            )}
                        </h2>
                    )}
                    {icon && (
                        <div className="flex h-14 w-[120px]">
                            {" "}
                            <img
                                src={icon}
                                alt="values"
                                className="xl:ml-10 ml-3 my-auto xl:h-14 xl:w-[120px] w-[66px] h-[30px]"
                            />
                        </div>
                    )}
                </div>

                {colorLine && (
                    <div
                        className={`${
                            modal && "ml-16 xl:ml-[125px]"
                        } h-1 w-12 xl:w-28 xl:h-2 my-4 xl:my-10 ${colorLine}`}
                    />
                )}

                <div className={widthTexts}>
                    {textOne && (
                        <p
                            className={`${sizeText || "p-steplix"} ${
                                widthTextOne ? widthTextOne : ""
                            }`}
                        >
                            {textOne}
                        </p>
                    )}
                    {textTwo && (
                        <p className={sizeText || "p-steplix"}>{textTwo}</p>
                    )}
                    {textThree && (
                        <p className={sizeText || "p-steplix"}>{textThree}</p>
                    )}
                    {textFour && (
                        <p className={sizeText || "p-steplix"}>{textFour}</p>
                    )}
                </div>

                {seeMore && setisModalOpen && (
                    <button
                        onClick={handleClick}
                        className="text-base text-steplix-yellow underline decoration-2 mt-5"
                    >
                        {seeMore}
                    </button>
                )}
                {seeMore && seeMoreLink && (
                    <button className="lg:text-2xl text-sm text-steplix-yellow underline decoration-2 mt-2">
                        {seeMore}
                    </button>
                )}
            </div>
        </div>
    );
};

//
//PropsTypes
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
};
export default StepCard;
