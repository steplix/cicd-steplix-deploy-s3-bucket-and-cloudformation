import propTypes from "prop-types";
import Icon from "../Icon";

const ButtonCard = ({
  label,
  title = label,
  alt = label,
  clickEvent,
  iconName,
  customImageClass,
  iconPosition = "left"
}) => {
  return (
    <button
      className="w-fit h-fit bg-blue hover:cursor-pointer active:bg-sky-active text-white rounded-2xl gap-y-2.5"
      title={title}
      alt={alt}
      type="button"
      onClick={clickEvent}>
      <div className="flex flex-row items-center px-3 py-1">
        {iconName && iconPosition === "left" && <Icon name={iconName} className={`${customImageClass} mr-2`} />}
        <p className="font-bold text-xs xl:text-base">{label}</p>
        {iconName && iconPosition === "right" && <Icon name={iconName} className={`${customImageClass} ml-2`} />}
      </div>
    </button>
  );
};

ButtonCard.propTypes = {
  label: propTypes.string.isRequired,
  title: propTypes.string,
  alt: propTypes.string,
  clickEvent: propTypes.func,
  iconName: propTypes.string,
  customImageClass: propTypes.string,
  iconPosition: propTypes.oneOf(["left", "right"]),
};

export default ButtonCard;
