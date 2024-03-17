import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export const Modal = ({ setisModalOpen, isModalOpen, children }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    const checkIfClickedOutside = (e) => {
      if (isModalOpen && ref.current && !ref.current.contains(e.target)) {
        setisModalOpen(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
      document.body.classList.remove('no-scroll');
    };
  }, [isModalOpen, setisModalOpen]);

  return (
    <>
      {isModalOpen && (
        <div
          ref={ref}
          className="z-200 fixed top-[120px] left-0 w-full h-full bg-white bg-opacity-40 flex justify-center overflow-y-auto"
        >
          <div className="z-300">{children}</div>
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
