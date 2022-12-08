const AvatarSkeleton = ({ isIcon, icon, padding, background = 'bg-black' }) => {
  return (
    <>
      <div className={`${padding} ${background} rounded-full animate-pulse w-[fit-content]`}>
        {isIcon ? icon : null}
      </div>
    </>
  );
};

export default AvatarSkeleton;
