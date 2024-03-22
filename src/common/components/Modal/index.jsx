import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export const Modal = ({ setisModalOpen, isModalOpen, children }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (isModalOpen) {
      window.scrollTo(0, 0);
    }
    const checkIfClickedOutside = (e) => {
      if (isModalOpen && ref.current && !ref.current.contains(e.target)) {
        setisModalOpen(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isModalOpen, setisModalOpen]);

  return (
    <>
      {isModalOpen && (
        <div
          ref={ref}
          className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-25 flex justify-center overflow-y-auto z-[100]"
        >
          <div className="z-[150] mt-16">{children}</div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  setisModalOpen: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
