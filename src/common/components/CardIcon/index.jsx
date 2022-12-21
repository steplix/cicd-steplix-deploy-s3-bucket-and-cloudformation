import propTypes from 'prop-types';
import Icon from '@/components/Icon';

const CardIcon = ({ text, iconName }) => {

  const textArray = text.split(" ");
  const isPluralText = textArray.length > 1;

  return (
    <div className="bg-white rounded-[20px] flex flex-col items-center justify-center space-y-1 min-w-[88px] min-h-[68px]">
      <Icon name={iconName} className="h-6 w-6" />
      <p className="text-[10px] text-center font-medium text-purple">
        {textArray[0]}
        {
          isPluralText && (
            <>
            <br />
            {textArray[1]}
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
};

export default CardIcon;