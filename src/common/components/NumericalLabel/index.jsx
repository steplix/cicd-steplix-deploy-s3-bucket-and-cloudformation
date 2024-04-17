import PropTypes from 'prop-types';

export const NumericalLabelComponent = ({ label, number }) => {
  return (
    <div className="py-1 px-6 font-poppins flex flex-col justify-center items-center">
      <p className="text-[20px] font-semibold leading-[26px]">{number}</p>
      <p className="text-[13px] leading-[16.9px]">{label}</p>
    </div>
  );
};

NumericalLabelComponent.propTypes = {
  label: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
