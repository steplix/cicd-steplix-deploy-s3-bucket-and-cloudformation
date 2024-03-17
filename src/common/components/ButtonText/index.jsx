import PropTypes from 'prop-types';

export const ButtonText = ({ label, clickEvent }) => {
  return (
    <button
      className="text-blue text-sm font-bold font-Poppins leading-[18.20px] tracking-wide pr-3 mb-4"
      onClick={clickEvent}
    >
      {label}
    </button>
  );
};

ButtonText.propTypes = {
  label: PropTypes.string.isRequired,
  clickEvent: PropTypes.func,
};
