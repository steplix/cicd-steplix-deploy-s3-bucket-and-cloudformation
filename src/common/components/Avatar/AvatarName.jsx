import PropTypes from "prop-types";

const AvatarName = ({ nameInitials }) => {
  return (
    <span className="text-black text-bold text-1xl rounded-full w-full h-full flex justify-center items-center">
      {nameInitials}
    </span>
  );
};

AvatarName.propTypes = {
  nameInitials: PropTypes.string,
};

export default AvatarName;
