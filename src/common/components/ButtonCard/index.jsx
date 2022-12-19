import propTypes from "prop-types";
import Icon from "../Icon";

const ButtonCard = ({
  label,
  title = label,
  alt = label,
  clickEvent,
  iconName,
  customImageClass,
}) => {
  return (
    <button
      className="w-fit h-fit bg-blue hover:cursor-pointer active:bg-sky-active text-white rounded-2xl gap-y-2.5"
      title={title}
      alt={alt}
      type="button"
      onClick={clickEvent}>
      <div className="flex flex-row items-center mx-3 my-1  ">
        {iconName && <Icon name={iconName} className={customImageClass} />}
        <p className={iconName && "ml-2"}>{label}</p>
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
};

export default ButtonCard;
