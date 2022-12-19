import PropTypes from "prop-types";

const AvatarSkeleton = ({ icon, background }) => {
  return (
    <>
      <div className={`${background} p-7 rounded-full animate-pulse w-[fit-content]`}>
        {icon && icon}
      </div>
    </>
  );
};

AvatarSkeleton.propTypes = {
  icon: PropTypes.element,
  background: PropTypes.string,
};

AvatarSkeleton.defaultProps = {
  background: "bg-black",
};

export default AvatarSkeleton;
