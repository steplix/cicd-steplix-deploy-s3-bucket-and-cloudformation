import propTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import Icon from '@/components/Icon';
import { fadeInFromTheSide } from '@/common/lib/animation';
import { getShortBreakpoint } from '@/common/utils/methods';

const FlipCard = ({ title, iconName, resize, description }) => {
  const [isActive, setIsActive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState('');

  const ref = useRef();

  const handleOnClick = () => setIsActive(!isActive);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    const breakpoint = getShortBreakpoint(window.innerWidth);

    if (breakpoint === 'xs' || breakpoint === 'sm') {
      setIsTouchDevice(true);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.addEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <motion.div
      className={`flex cursor-pointer ${
        resize ? 'flex-col lg:flex-row' : 'flex-col'
      } items-center justify-center space-y-1 w-[329px] sm:w-[290px] h-[134px] lg:space-y-2 md:w-[272px] md:h-[149px] lg:w-[290px] xl:w-[362px] sm:max-w-none group `}
      variants={fadeInFromTheSide}
    >
      <div
        ref={ref}
        className={`relative w-full h-full duration-1000 preserve-3d  perspective-1000 flipcard  ${
          isTouchDevice ? isActive && 'rotate-y-180' : 'group-hover:rotate-y-180'
        }`}
        onClick={handleOnClick}
      >
        <div className="flex flex-col absolute w-full h-full justify-center items-center backface-hidden space-y-[10px] border border-blue bg-white rounded-[20px] shadow-tech-card">
          <Icon className={`h-[40px] w-[40px]`} name={iconName} />
          <p className={`title-[20px] text-center font-medium text-purple lg:text-base`}>{title}</p>
        </div>
        <div className="absolute w-full h-full rotate-y-180 flex items-center  backface-hidden border border-blue bg-white rounded-[20px] shadow-tech-card">
          <p className=" text-xs text-center p-4">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

FlipCard.propTypes = {
  title: propTypes.string.isRequired,
  iconName: propTypes.string.isRequired,
  resize: propTypes.bool,
  description: propTypes.string,
};

export default FlipCard;
