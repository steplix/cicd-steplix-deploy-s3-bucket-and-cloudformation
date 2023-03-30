/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types';

const AvatarImage = ({ imgSrc, imgAlt }) => {
  return (
    <>
      <div className='relative'>
        <img alt={imgAlt} className='w-full h-full object-cover rounded-full' src={imgSrc} />
      </div>
    </>
  );
};

AvatarImage.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
};

export default AvatarImage;
