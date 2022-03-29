import React from "react";
import PropTypes from "prop-types";

const StepCardCircular = ({ text, borderColor }) => {
    return (
        <div
            className={`${borderColor} px-2 hidden lg:flex border-2 rounded-full flex-col bg-steplix-lilac/75 w-full h-full text-center justify-center my-auto`}
        >
            {text}
        </div>
    );
};
//
//PropsTypes
//
StepCardCircular.propTypes = {
    text: PropTypes.string.isRequired,
    borderColor: PropTypes.string.isRequired,
};
export default StepCardCircular;
