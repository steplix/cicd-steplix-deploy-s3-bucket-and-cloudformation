import PropTypes from 'prop-types';

import ToastIcon from '../ToastIcon';

const TextField = ({
  size = 'w-12/12',
  email,
  styleProps = '',
  rightIcon,
  leftIcon,
  clickEvent,
  showToast = false,
  toastStyles = '',
  toastType,
  toastMessage,
}) => {
  return (
    <div className={`${size} my-0 mx-auto relative`}>
      <div
        className={`${styleProps} flex justify-between items-center mt-4 space-x-3 border-b-[1.2px] border-b-[#B0E1F7] pb-1`}>
        <div className='flex gap-2 items-center'>
          {leftIcon}
          <span>{email}</span>
        </div>
        <ToastIcon
          toastStyles={toastStyles}
          icon={rightIcon}
          message={toastMessage}
          clickEvent={clickEvent}
          type={toastType}
          showToast={showToast}
        />
      </div>
    </div>
  );
};

TextField.propTypes = {
  clickEvent: PropTypes.func.isRequired,
  email: PropTypes.string,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  showToast: PropTypes.bool,
  size: PropTypes.string,
  styleProps: PropTypes.string,
  toastStyles: PropTypes.string,
};

TextField.defaultProps = {
  email: 'example@gmail.com',
};

export default TextField;
