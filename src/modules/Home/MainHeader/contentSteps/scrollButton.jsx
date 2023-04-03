import React from "react";
import PropTypes from "prop-types";
import Icon from "@/common/components/Icon";

const ScrollButton = ({ isVisible, icon, scrollAction, customClass, ariaLabel }) => {
    return (
        <>
            {isVisible &&
                <button
                    className={`lg:relative flex justify-center items-center h-[72px] lg:h-[88px] w-[72px] lg:w-[88px] ${customClass}`}
                    onClick={scrollAction}
                    aria-label={ariaLabel}
                >
                    <Icon name={icon} className="h-[70.4px] w-[70.4px] lg:h-[88px] lg:w-[88px]" />
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