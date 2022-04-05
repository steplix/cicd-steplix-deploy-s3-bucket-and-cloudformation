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
        <div
            className={`${textTwo ? "w-full" : "w-[330px] lg:w-full"} ${
                number ? "flex gap-2" : ""
            }`}
        >
            {number && (
                <p className="text-white lg:text-3xl text-2xl font-black">
                    {number}
                </p>
            )}
            <div>
                {title && (
                    <h4
                        className={`lg:text-3xl text-2xl font-black ${
                            colorTitle ? colorTitle : "text-white"
                        }`}
                    >
                        {title}
                    </h4>
                )}
                {colorLine && (
                    <div
                        className={`lg:w-24 lg:h-[5px] h-1 w-12 my-4 ${colorLine}`}
                    />
                )}

                <div className="text-sm lg:text-base text-white font-light">
                    {textOne && <p>{textOne}</p>}
                    {textTwo && <p>{textTwo}</p>}
                    {textThree && <p>{textThree}</p>}
                    {textFour && <p>{textFour}</p>}
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
    seeMore: PropTypes.string,
    colorLine: PropTypes.string,
    colorTitle: PropTypes.string,
    textOne: PropTypes.string,
    textTwo: PropTypes.string,
    textThree: PropTypes.string,
    textFour: PropTypes.string,
};
export default StepCard;
