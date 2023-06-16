import PropTypes from 'prop-types';

import { useMessageCopy } from '@/hooks/useMessageCopy';

const ToastIcon = ({ icon, message, toastStyles, type, clickEvent, showToast }) => {
  const { showMessageCopied, setIsCopied } = useMessageCopy();

  const onClickEvent = () => {
    clickEvent();
    setIsCopied(true);
  };

  return (
    <div className="w-fit relative" onClick={onClickEvent}>
      <div className="cursor-pointer">{icon}</div>
      {showToast && (
        <span
          className={`${type} ${toastStyles} absolute bottom-1/2 -right-3/4  py-1 px-3 rounded-md shadow-md transition-all ${showMessageCopied}`}
        >
          {message}
        </span>
      )}
    </div>
  );
};

ToastIcon.propTypes = {
  icon: PropTypes.element.isRequired,
  message: PropTypes.string,
  toastStyles: PropTypes.string,
  clickEvent: PropTypes.func,
  type: PropTypes.oneOf(['toast-primary', 'toast-error', 'toast-warning', 'toast-default']),
};

ToastIcon.defaultProps = {
  message: 'Copied',
  type: 'toast-default',
};

export default ToastIcon;
