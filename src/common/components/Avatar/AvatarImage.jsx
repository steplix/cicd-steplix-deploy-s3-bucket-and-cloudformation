/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types';

const AvatarImage = ({ imgSrc }) => {
  return (
    <>
      <div className='relative'>
        <img alt='profile' className='w-full h-full object-cover rounded-full' src={imgSrc} />
      </div>
    </>
  );
};

AvatarImage.propTypes = {
  imgSrc: PropTypes.string,
};

export default AvatarImage;
