import React from "react";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";

const ShadowCard = ({ children }) => {
    return (
        <div className="w-full xl:min-h-[425px]">
            <Fade cascade>
                <div className="w-full h-full shadow-steplix rounded-2xl border xl:border-2 border-gray-100 p-5 xl:px-14 xl:pt-16 xl:pb-5">
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
