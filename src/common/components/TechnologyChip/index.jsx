import PropTypes from "prop-types";
import Icon from "../Icon";

const Chip = ({ label, name, customIconClass }) => {
  return (
    <div className="w-[120px] h-[30px] text-purple-light border border-purple-light rounded-3xl">
      <div className="flex flex-row justify-center">
        <Icon name={name} className={customIconClass}/>
        <label>{label}</label>
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