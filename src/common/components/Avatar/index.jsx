import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { useAvatarName } from '@/hooks/useAvatarName';
import AvatarImage from './AvatarImage';

import AvatarSkeleton from '@/common/components/Skeleton/AvatarSkeleton';

const Avatar = ({
  imgSrc,
  name,
  surname,
  isLoading,
  cssClasses = 'bg-gradient-to-r from-[#3C1053] to-[#00A9E0]',
  width = 'w-8',
  height = 'h-8',
  nameStyle = 'text-black text-bold text-1xl',
}) => {
  const [nameInitials] = useAvatarName(name, surname);
  const [showClasses, setShowClasses] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setShowClasses(true);
    }
  }, [isLoading]);

  return (
    <>
      <div
        className={`flex justify-center items-center rounded-full ${
          showClasses ? cssClasses : ''
        } ${width} ${height}`}>
        {isLoading ? (
          <AvatarSkeleton isIcon={false} padding='p-4' />
        ) : (
          <AvatarImage
            imgSrc={imgSrc}
            nameInitials={nameInitials}
            nameStyle={nameStyle}
            width={width}
            height={height}
          />
        )}
      </div>
    </>
  );
};

Avatar.propTypes = {
  cssClasses: PropTypes.string,
  imgSrc: PropTypes.string,
  isLoading: PropTypes.bool,
  name: PropTypes.string,
  surname: PropTypes.string,
  nameStyle: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

Avatar.defaultProps = {
  cssClasses: 'bg-gradient-to-r from-[#3C1053] to-[#00A9E0]',
};

export default Avatar;
