import PropTypes from "prop-types";
import Icon from "../Icon";

const Chip = ({ label, name, customIconClass }) => {
  return (
    <div className="border-[1.5px] border-purple rounded-[40px] px-2 flex items-center justify-center min-h-[29px]">
      <div className="flex flex-row items-center justify-center space-x-1">
        <Icon name={name} className={customIconClass}/>
        <p className="font-semibold text-xs">{label}</p>
      </div>
    </div>
  );
};

export default Chip;

Chip.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  customIconClass: PropTypes.string.isRequired,
};