import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { useAvatarName } from '@/hooks/useAvatarName';
import AvatarSkeleton from './AvatarSkeleton';
import { AvatarContent } from './AvatarContent';

const Avatar = ({ imgSrc, name, surname, isLoading, cssClasses, nameStyle }) => {
  const nameInitials = useAvatarName(name, surname);
  const [showClasses, setShowClasses] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setShowClasses(true);
    }
  }, [isLoading]);

  return (
    <>
      <div
        className={`flex justify-center items-center rounded-full w-10 h-10 md:w-12 md:h-12  ${
          showClasses ? cssClasses : ''
        }`}>
        {isLoading ? (
          <AvatarSkeleton padding='p-4' />
        ) : (
          <AvatarContent imgSrc={imgSrc} nameInitials={nameInitials} nameStyle={nameStyle} />
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
};

Avatar.defaultProps = {
  cssClasses: 'avatar-gradient',
  nameStyle: 'text-black text-bold text-1xl',
};

export default Avatar;
