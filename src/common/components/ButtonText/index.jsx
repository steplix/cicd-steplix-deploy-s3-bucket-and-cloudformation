import PropTypes from 'prop-types';

import Icon from '../Icon';

export const ButtonText = ({ label, clickEvent, iconName, customImageClass }) => {
  return (
    <button
      className="text-blue text-sm font-bold font-poppins leading-[18.20px] tracking-wide pr-3 mb-4"
      onClick={clickEvent}
    >
      <div className="flex flex-row items-center">
        <p>{label}</p>
        {iconName && <Icon className={`${customImageClass} ml-2`} name={iconName} />}
      </div>
    </button>
  );
};

ButtonText.propTypes = {
  label: PropTypes.string.isRequired,
  clickEvent: PropTypes.func,
  iconName: PropTypes.string,
  customImageClass: PropTypes.string,
};
