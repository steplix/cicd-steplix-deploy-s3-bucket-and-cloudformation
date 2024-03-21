import PropTypes from 'prop-types';

import Icon from '../Icon';

export const ProductItem = ({ iconName, label }) => {
  return (
    <div className="flex items-center justify-start gap-2 item mt-2">
      <div className="w-6 h-6">
        <Icon className="fill-none" name={iconName} />
      </div>
      <div className="text-zinc-900 text-sm font-semibold font-['Poppins'] leading-tight tracking-tight max-w-[190px] lg:max-w-[300px]">
        {label}
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  iconName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
