import { PropTypes } from 'prop-types';

import Icon from '@/components/Icon';
import ChipColorFilled from '@/common/components/Chip/ChipColorFilled';

export const PortfolioHeading = ({ iconName, chipLabel, iconChip, spanLabel }) => {
  return (
    <section
      className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 lg:justify-center"
      id="heading"
    >
      <Icon className="h-14 lg:h-20" name={iconName} />
      <div className="flex items-center gap-4">
        <ChipColorFilled
          background="bg-blue-light"
          iconColor="text-blue"
          iconName={iconChip}
          label={chipLabel}
          type="slim"
        />
        <span className="font-poppins text-[13px] lg:text-base font-semibold">{spanLabel}</span>
      </div>
    </section>
  );
};

PortfolioHeading.prototype = {
  iconName: PropTypes.string,
  chipLabel: PropTypes.string,
  iconChip: PropTypes.string,
  spanLabel: PropTypes.string,
};
