import PropTypes from 'prop-types';

import Icon from '../Icon';

export const ProductItemDescription = ({ iconName, label, description }) => {
  return (
    <div className="flex flex-col gap-2 mb-6 w-full lg:w-1/2">
      <div className="flex items-center gap-2 lg:flex-col lg:items-start">
        <div className="w-8 h-8 lg:w-12 lg:h-12">
          <Icon className="fill-none" name={iconName} />
        </div>
        <div class="text-black-typography text-lg sm:text-xl font-semibold font-poppins leading-tight tracking-tight">
          {label}
        </div>
      </div>
      <div className="text-black-typography text-sm font-normal font-poppins leading-tight tracking-tight lg:pr-6">
        {description}
      </div>
    </div>
  );
};

ProductItemDescription.propTypes = {
  iconName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
