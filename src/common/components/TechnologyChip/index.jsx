import PropTypes from 'prop-types';

import Icon from '../Icon';

const Chip = ({ label, name, customIconClass }) => {
  return (
    <div className="border-[1.5px] border-purple rounded-[40px] px-2 flex items-center justify-center min-h-[29px] lg:h-[44px] lg:pr-4 lg:pl-4">
      <div className="flex flex-row items-center justify-center space-x-1 lg:space-x-3">
        <Icon className={customIconClass} name={name} />
        <p className="font-semibold text-xs lg:text-base">{label}</p>
      </div>
    </div>
  );
};

export default Chip;

Chip.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  customIconClass: PropTypes.string.isRequired,
};
