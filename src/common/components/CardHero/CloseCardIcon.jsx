import PropTypes from 'prop-types';

export const CloseCardIcon = ({ onClose, children }) => {
  return (
    <div className='self-end cursor-pointer mt-2' onClick={onClose}>
      {children}
    </div>
  );
};

CloseCardIcon.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
