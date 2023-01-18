import propTypes from 'prop-types';
import Icon from '@/components/Icon';

const CardIcon = ({ text, iconName, resize }) => {

  const textArray = text.split(" ");
  const isPluralText = textArray.length > 1;

  return (
    <div className={`bg-white rounded-[20px] flex flex-col items-center justify-center space-y-1 min-w-[88px] min-h-[68px] max-w-[123px] sm:max-w-none ${
      resize && 'lg:min-h-[120px] lg:min-w-[160px] xl:min-w-[204px] lg:space-y-2'
    }`}>
      <Icon name={iconName} className={`h-6 w-6 ${resize && 'lg:h-[39px] w-[39px]'}`} />
      <p className={`text-[10px] text-center font-medium text-purple ${resize && 'lg:text-[13px]'}`}>
        {textArray[0]}
        {
          isPluralText && (
            <>
            <br className='lg:hidden' />
            {" "}{textArray[1]}
            </>
          )
        }
      </p>
    </div>
  );
};

CardIcon.propTypes = {
  text: propTypes.string.isRequired,
  iconName: propTypes.string.isRequired,
  resize: propTypes.bool
};

export default CardIcon;