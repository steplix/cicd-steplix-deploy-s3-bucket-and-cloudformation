import PropTypes from 'prop-types';

const AvatarName = ({ nameStyle, nameInitials }) => {
  return (
    <span
    className={`${nameStyle} rounded-full w-full h-full flex justify-center items-center`}>
    {nameInitials}
  </span>
  )
}

AvatarName.propTypes = {
  nameInitials: PropTypes.string,
  nameStyle: PropTypes.string,
};

AvatarName.defaultProps = {
  nameInitials: 'DN',
}


export default AvatarName