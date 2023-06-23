import PropTypes from 'prop-types';

import Icon from '@/common/components/Icon';

const CardHero = ({ title, description, icon }) => {
  return (
    <div className="bg-white pt-4 pb-6 px-6 rounded-2xl w-[245px] h-auto lg:w-[305px] flex flex-col gap-4 shadow-step-card cardStepAnimation z-10">
      <Icon className="h-[40px] w-[40px]" name={icon} />
      <div className="flex flex-col gap-2">
        <span className="font-sofia text-xl lg:text-[26px] leading-6 lg:leading-[26px] font-semibold lg:font-bold">
          {title}
        </span>
        <span className="font-poppins text-black text-[13px] lg:text-base leading-[16.9px] lg:leading-[20.8px] font-normal">
          {description}
        </span>
      </div>
    </div>
  );
};

CardHero.propTypes = {
  title: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default CardHero;
