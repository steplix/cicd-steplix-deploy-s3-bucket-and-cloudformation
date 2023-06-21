import PropTypes from 'prop-types';

import Icon from '@/common/components/Icon';

const ScrollButton = ({ isVisible, icon, scrollAction, customClass, ariaLabel }) => {
  return (
    <>
      {isVisible && (
        <button
          aria-label={ariaLabel}
          className={`lg:relative flex justify-center items-center h-[72px] lg:h-[88px] w-[72px] lg:w-[88px] ${customClass}`}
          onClick={scrollAction}
        >
          <Icon className="h-[70.4px] w-[70.4px] lg:h-[88px] lg:w-[88px]" name={icon} />
        </button>
      )}
    </>
  );
};

ScrollButton.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  icon: PropTypes.string.isRequired,
  scrollAction: PropTypes.func.isRequired,
  customClass: PropTypes.string,
};

export default ScrollButton;
