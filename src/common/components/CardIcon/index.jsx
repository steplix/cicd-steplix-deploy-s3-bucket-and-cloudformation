import propTypes from 'prop-types';
import Icon from '@/components/Icon';

// TODO: DO THE MISSING BREAKPOINTS WHEN THE DESIGN IS DONE
// TODO: INTEGRATE WITH THE TRANSLATE LIBRARY

const CardIcon = ({ text, iconName }) => {
  return (
    <div className="bg-white rounded-[20px] flex flex-col items-center justify-center space-y-1 py-2.5 px-2 min-w-[98px]">
      <Icon name={iconName} className="h-6 w-6" />
      <p className="text-xs text-purpleV3">{text}</p>
    </div>
  );
};

CardIcon.propTypes = {
  text: propTypes.string.isRequired,
  iconName: propTypes.string.isRequired,
};

export default CardIcon;