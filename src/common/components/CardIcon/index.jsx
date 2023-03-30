import propTypes from 'prop-types';
import Icon from '@/components/Icon';
import { fadeInFromTheSide } from '@/common/lib/animation';
import { motion } from 'framer-motion';

const CardIcon = ({ text, iconName, resize }) => {

  const textArray = text.split(" ");
  const isPluralText = textArray.length > 1;

  return (
    <motion.div className={`bg-white rounded-[20px] flex  ${resize ? 'flex-col lg:flex-row' : 'flex-col'} items-center justify-center space-y-1 lg:space-y-2 min-w-[88px] min-h-[68px] lg:min-h-[120px] max-w-[123px] sm:max-w-none ${
      resize && 'lg:min-w-[283px] xl:min-w-[357px] lg:space-x-6'
    }`} variants={fadeInFromTheSide}>
      <Icon name={iconName} className={`h-6 w-6 lg:h-[56px] lg:w-[56px]`} />
      <p className={`text-[10px] text-center font-medium text-purple lg:text-base`}>
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
    </motion.div>
  );
};

CardIcon.propTypes = {
  text: propTypes.string.isRequired,
  iconName: propTypes.string.isRequired,
  resize: propTypes.bool
};

export default CardIcon;