import React from "react";
import PropTypes from "prop-types";

const StepCard = ({
    number,
    title,
    emptyTitle,
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
    icon,
    sizeTitle,
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
                <div className="flex">
                    {title && (
                        <h2
                            className={`${
                                sizeTitle ? sizeTitle : "h2-steplix"
                            } font-black  ${
                                colorTitle ? colorTitle : "text-white"
                            }`}
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
                                className="ml-10 my-auto  h-14 w-[120px]"
                            />
                        </div>
                    )}
                </div>

                {colorLine && (
                    <div
                        className={`h-1 w-12 xl:w-28 xl:h-2 my-4 xl:my-10 ${colorLine}`}
                    />
                )}

                <>
                    {textOne && <p className="p-steplix">{textOne}</p>}
                    {textTwo && <p className="p-steplix">{textTwo}</p>}
                    {textThree && <p className="p-steplix">{textThree}</p>}
                    {textFour && <p className="p-steplix">{textFour}</p>}
                </>

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
    emptytitle: PropTypes.string,
    seeMore: PropTypes.string,
    colorLine: PropTypes.string,
    colorTitle: PropTypes.string,
    textOne: PropTypes.string,
    textTwo: PropTypes.string,
    textThree: PropTypes.string,
    textFour: PropTypes.string,
    icon: PropTypes.string,
    sizeTitle: PropTypes.string,
};
export default StepCard;
