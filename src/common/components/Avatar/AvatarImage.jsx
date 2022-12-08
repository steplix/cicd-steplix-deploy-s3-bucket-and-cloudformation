import PropTypes from 'prop-types';

import NextImage from 'next/image';

const AvatarImage = ({ imgSrc, nameInitials, nameStyle, width, height }) => {
  return (
    <>
      {!imgSrc ? (
        <span
          className={`${nameStyle} rounded-full w-full h-full flex justify-center items-center`}>
          {nameInitials}
        </span>
      ) : (
        <div className={`relative ${width} ${height}`}>
          <NextImage
            layout='fill'
            alt='profile'
            className='w-full h-full object-cover rounded-full'
            src={imgSrc}
          />
        </div>
      )}
    </>
  );
};

AvatarImage.propTypes = {
  imgSrc: PropTypes.string,
  nameInitials: PropTypes.string,
  nameStyle: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default AvatarImage;
