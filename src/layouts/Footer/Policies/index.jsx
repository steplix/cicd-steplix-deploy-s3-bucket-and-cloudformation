import PropTypes from 'prop-types';

const Policies = ({
  rightsText,
  privacyPolicyFilename,
  privacyPolicyAriaLabel,
  privacyPolicyText,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:items-end font-poppins text-center text-white">
      <p className="text-[10px] leading-[14px] font-light sm:text-left">{rightsText}</p>
      <a
        aria-label={privacyPolicyAriaLabel}
        className="underline text-[10px] leading-4 tracking-[0.01em]"
        href={`/assets/files/${privacyPolicyFilename}`}
        rel="noreferrer"
        target="_blank"
      >
        {privacyPolicyText}
      </a>
    </div>
  );
};

Policies.propTypes = {
  rightsText: PropTypes.string.isRequired,
  privacyPolicyFilename: PropTypes.string.isRequired,
  privacyPolicyAriaLabel: PropTypes.string.isRequired,
  privacyPolicyText: PropTypes.string.isRequired,
};

export default Policies;
