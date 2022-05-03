import React from "react";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";

const ShadowCard = ({ children }) => {
    return (
        <div className="w-full xl:min-h-[460px] 2xl:min-h-[301px]">
            <Fade cascade>
                <div className="w-full h-full shadow-steplix rounded-2xl border xl:border-2 border-gray-100 p-5 xl:px-7 2xl:pt-12 2xl:pb-5">
                    {children}
                </div>
            </Fade>
        </div>
    );
};

//
// PropsTypes
//
ShadowCard.propTypes = {
    children: PropTypes.element,
};

export default ShadowCard;
