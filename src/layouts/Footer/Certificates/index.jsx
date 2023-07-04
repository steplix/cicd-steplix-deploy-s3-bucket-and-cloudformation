import PropTypes from 'prop-types';

// import Icon from '@/common/components/Icon';

const Certificates = ({ text }) => {
  return (
    <div className="flex sm:flex-col justify-center sm:justify-end gap-4 sm:gap-6">
      <div className="flex sm:justify-end lg:justify-center gap-4">
        {/* <Icon className="h-[108px] w-[60px]" name="iram" />
        <Icon className="h-[85px] w-[61px]" name="inet" /> */}
      </div>
      <p className="font-poppins text-[11px] lg:text-xs leading-4 tracking-[0.01em] text-white">
        {text}
      </p>
    </div>
  );
};

Certificates.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Certificates;
