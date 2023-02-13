import React from "react";
import PropTypes from "prop-types";
import Icon from "@/common/components/Icon";

const ScrollButton = ({ isVisible, icon, scrollAction, customClass, ariaLabel }) => {
    return (
        <>
            {isVisible &&
                <button
                    className={`flex justify-center items-center h-[48px] lg:h-[88px] w-[48px] lg:w-[88px] ${customClass}`}
                    onClick={scrollAction}
                    aria-label={ariaLabel}
                >
                    <Icon name={icon} className="h-[48px] lg:h-[70.4px] w-[48px] lg:w-[70.4px]" />
                </button>
            }
        </>
    );
};

ScrollButton.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    icon: PropTypes.string.isRequired,
    scrollAction: PropTypes.func.isRequired,
    customClass: PropTypes.string
};

export default ScrollButton;