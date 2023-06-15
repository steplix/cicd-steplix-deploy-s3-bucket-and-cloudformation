import PropTypes from 'prop-types';

import Icon from '@/common/components/Icon';

const Certificates = ({ className, url, ariaLabel, text }) => {
  return (
    <div className={className}>
      <div className="flex sm:flex-col justify-center sm:justify-end gap-4 sm:gap-6">
        <div className="flex sm:justify-end lg:justify-center gap-4">
          <Icon className="h-[108px] w-[60px]" name="iram" />
          <Icon className="h-[85px] w-[61px]" name="inet" />
        </div>
        <div className="w-[72px] sm:w-full">
          <a
            aria-label={ariaLabel}
            className="font-poppins underline text-[10px] lg:text-xs leading-4 tracking-[0.01em] text-white"
            href={url}
            rel="noreferrer"
            target="_blank"
          >
            {text}
          </a>
        </div>
      </div>
    </div>
  );
};

Certificates.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Certificates;
