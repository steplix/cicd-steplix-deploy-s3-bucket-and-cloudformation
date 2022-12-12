import AvatarImage from './AvatarImage';
import AvatarName from './AvatarName';

export const AvatarContent = ({ imgSrc, nameInitials, nameStyle }) => {
  return (
    <>
      {imgSrc ? (
        <AvatarImage imgSrc={imgSrc} />
      ) : (
        <AvatarName nameInitials={nameInitials} nameStyle={nameStyle} />
      )}
    </>
  );
};
