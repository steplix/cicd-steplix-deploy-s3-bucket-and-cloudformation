import PropTypes from 'prop-types';

const AvatarSkeleton = ({ icon, padding, background }) => {
  return (
    <>
      <div className={`${padding} ${background} rounded-full animate-pulse w-[fit-content]`}>
        {icon && icon}
      </div>
    </>
  );
};

AvatarSkeleton.propTypes = {
  icon: PropTypes.element,
  padding: PropTypes.string,
  background: PropTypes.string,
};

AvatarSkeleton.defaultProps = {
  padding: 'p-4',
  background: 'bg-black',
};

export default AvatarSkeleton;
