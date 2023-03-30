import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import { useAvatarName } from "@/hooks/useAvatarName";
import AvatarSkeleton from "./AvatarSkeleton";
import AvatarImage from "./AvatarImage";
import AvatarName from "./AvatarName";

const Avatar = ({ imgSrc, imgAlt, name, surname, isLoading }) => {
  const nameInitials = useAvatarName(name, surname);
  const [showClasses, setShowClasses] = useState(false);

  useEffect(() => {
    if (!isLoading && !imgSrc) {
      setShowClasses(true);
    }
  }, [imgSrc, isLoading]);

  return (
    <>
      <div
        className={`flex justify-center items-center rounded-full avatar-size  ${
          showClasses ? "avatar-gradient" : ""
        }`}>
        {isLoading ? (
          <AvatarSkeleton />
        ) : imgSrc ? (
          <AvatarImage imgSrc={imgSrc} imgAlt={imgAlt} />
        ) : (
          <AvatarName nameInitials={nameInitials} />
        )}
      </div>
    </>
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
  isLoading: PropTypes.bool,
  name: PropTypes.string,
  surname: PropTypes.string,
};

export default Avatar;
