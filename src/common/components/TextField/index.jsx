import PropTypes from "prop-types";
import ToastIcon from "../ToastIcon";
import Icon from "../Icon";

const TextField = ({
  text,
  styleProps,
  rightIcon,
  leftIcon,
  clickEvent,
  showToast,
  toastStyles,
  toastType,
  toastMessage,
}) => {
  return (
    <div className={`w-full my-0 mx-auto relative`}>
      <div
        className={`${styleProps} flex justify-between items-center mt-4 space-x-3 border-b-[1.2px] border-blue-light pb-1`}
      >
        <div className="flex gap-2 items-center">
          {leftIcon}
          <span className="text-black">{text}</span>
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
  text: PropTypes.string,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  showToast: PropTypes.bool,
  styleProps: PropTypes.string,
  toastStyles: PropTypes.string,
  toastType: PropTypes.oneOf([
    "toast-primary",
    "toast-error",
    "toast-warning",
    "toast-default",
  ]),
  toastMessage: PropTypes.string,
};

TextField.defaultProps = {
  text: "example@gmail.com",
  toastMessage: "Copied",
  toastType: "toast-default",
  rightIcon: <Icon name="copy" className="w-5" />,
  leftIcon: <Icon name="mailTextField" className="w-5" />,
  clickEvent: () => console.log("Click event is Required"),
  showToast: true,
  styleProps: "",
  toastStyles: "",
};

export default TextField;
