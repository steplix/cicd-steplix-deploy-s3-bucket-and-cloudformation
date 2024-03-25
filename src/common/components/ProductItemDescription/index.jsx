import PropTypes from 'prop-types';

import Icon from '../Icon';

export const ProductItemDescription = ({ iconName, label, description }) => {
  return (
    <div className="flex flex-col gap-2 mb-6 w-full lg:w-1/2">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8">
          <Icon className="fill-none" name={iconName} />
        </div>
        <div class="text-zinc-900 text-lg font-semibold font-['Poppins'] leading-tight tracking-tight">
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
