import React from "react";
import PropTypes from "prop-types";

const StepCard = ({
    number,
    title,
    seeMore,
    colorLine,
    textOne,
    textTwo,
    textThree,
    textFour,
    colorTitle,
    setisModalOpen,
    seeMoreLink,
    setPositionModal,
}) => {
    const handleClick = () => {
        setisModalOpen(true);
        number === "01." && setPositionModal(1);
        number === "02." && setPositionModal(2);
        number === "03." && setPositionModal(3);
    };
    return (
        <div className="w-full flex gap-2">
            {number && (
                <p className="text-white lg:text-4xl text-2xl font-bold">
                    {number}
                </p>
            )}
            <div>
                {title && (
                    <p
                        className={`text-2xl lg:text-4xl ${
                            textTwo ? "mb-7" : "mb-2"
                        } ${
                            colorTitle
                                ? colorTitle
                                : "text-white font-extrabold"
                        }`}
                    >
                        {title}
                    </p>
                )}
                {colorLine && (
                    <div
                        className={`lg:w-24 lg:h-[10px] h-1 w-12 ${colorLine}`}
                    ></div>
                )}
                <div className={`gap-y-8 ${textTwo ? "mt-7" : "mt-2"}`}>
                    {textOne && (
                        <p className="lg:text-xl text-sm mt-3 text-white">
                            {textOne}
                        </p>
                    )}
                    {textTwo && (
                        <p className="lg:text-xl text-sm mt-3 text-white">
                            {textTwo}
                        </p>
                    )}
                    {textThree && (
                        <p className="lg:text-xl text-sm mt-3 text-white">
                            {textThree}
                        </p>
                    )}
                    {textFour && (
                        <p className="lg:text-xl text-sm mt-3 text-white">
                            {textFour}
                        </p>
                    )}
                </div>

                {seeMore && setisModalOpen && (
                    <button
                        onClick={handleClick}
                        className="lg:text-2xl text-sm text-steplix-yellow underline decoration-2 mt-2"
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
    title: PropTypes.string.isRequired,
    seeMore: PropTypes.string,
    colorLine: PropTypes.string,
    colorTitle: PropTypes.string,
    textOne: PropTypes.string,
    textTwo: PropTypes.string,
    textThree: PropTypes.string,
    textFour: PropTypes.string,
};
export default StepCard;
