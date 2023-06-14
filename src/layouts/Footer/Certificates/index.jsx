import PropTypes from "prop-types";
import Icon from "@/common/components/Icon";

const Certificates = ({ className, url, ariaLabel, text }) => {
  return (
    <div className={className}>
      <div className="flex sm:flex-col justify-center sm:justify-end gap-4 sm:gap-6">
        <div className="flex sm:justify-end lg:justify-center gap-4">
          <Icon name="iram" className="h-[108px] w-[60px]" />
          <Icon name="inet" className="h-[85px] w-[61px]" />
        </div>
        <div className="w-[72px] sm:w-full">
          <a
            href={url}
            rel="noreferrer"
            target="_blank"
            className="font-poppins underline text-[10px] lg:text-xs leading-4 tracking-[0.01em] text-white"
            aria-label={ariaLabel}
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
