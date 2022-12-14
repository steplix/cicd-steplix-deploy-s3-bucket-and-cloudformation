import PropTypes from "prop-types";
import ToastIcon from "../ToastIcon";
import { mail as MailIcon, copy as CopyIcon } from "@/common/components/Icon/icons";

const TextField = ({
  email,
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
    <div className={`w-56 lg:w-80 my-0 mx-auto relative`}>
      <div
        className={`${styleProps} flex justify-between items-center mt-4 space-x-3 border-b-[1.2px] border-blue-light pb-1`}>
        <div className="flex gap-2 items-center">
          {leftIcon}
          <span className="text-black">{email}</span>
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
  styleProps: PropTypes.string,
  toastStyles: PropTypes.string,
  toastType: PropTypes.oneOf(["toast-primary", "toast-error", "toast-warning", "toast-default"]),
  toastMessage: PropTypes.string,
};

TextField.defaultProps = {
  email: "example@gmail.com",
  toastMessage: "Copied",
  toastType: "toast-default",
  rightIcon: <CopyIcon className="w-5" />,
  leftIcon: <MailIcon className="w-5" />,
  clickEvent: () => console.log("Click event is Required"),
  showToast: true,
  styleProps: "",
  toastStyles: "",
};

export default TextField;
