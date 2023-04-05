import { PropTypes } from "prop-types";
import { useAvatarName } from "@/hooks/useAvatarName";
import AvatarImage from "./AvatarImage";
import AvatarName from "./AvatarName";

const Avatar = ({ imgSrc, imgAlt, name, surname }) => {
  const nameInitials = useAvatarName(name, surname);
  const avatarComponent = imgSrc ? (
    <AvatarImage imgSrc={imgSrc} imgAlt={imgAlt} />
    ) : (
    <AvatarName nameInitials={nameInitials} />
    );

  return (
    <div
      className={`flex justify-center items-center rounded-full w-[72px] h-[72px]  ${
        !imgSrc ? "avatar-gradient" : ""
      }`}
    >
      {avatarComponent}
    </div>
  );
};

Avatar.propTypes = {
  cssClasses: PropTypes.string,
  imgSrc: (props, propName, componentName) => {
    if (!props[propName] && !props["name"] && !props["surname"]) {
      return new Error(
        `Provide an image source or a name and surname for the ${componentName} component.`
      );
    }
  },
  imgAlt: PropTypes.string,
  name: PropTypes.string,
  surname: PropTypes.string,
};

export default Avatar;
