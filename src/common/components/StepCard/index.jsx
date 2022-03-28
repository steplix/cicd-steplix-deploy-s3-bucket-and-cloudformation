import React from "react";
import PropTypes from "prop-types";

const StepCard = ({
    number,
    title,
    seeMore,
    colorLine,
    text,
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
                <p className="text-white lg:text-[52px] text-[18px] font-semibold">
                    {number}
                </p>
            )}
            <div>
                {title && (
                    <p
                        className={`text-[18px] lg:text-[52px] mb-2 ${
                            colorTitle ? colorTitle : "text-white font-semibold"
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
                {text && (
                    <p className="lg:text-2xl text-sm mt-3 text-white">
                        {text}
                    </p>
                )}
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
    text: PropTypes.string.isRequired,
};
export default StepCard;
