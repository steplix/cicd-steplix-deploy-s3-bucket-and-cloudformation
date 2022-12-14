import PropTypes from 'prop-types';

export const CardBody = ({ title, description, children }) => {
  return (
    <div className='w-full p-2'>
      <div className='mt-2'>{children}</div>
      <h3 className='mt-2 text-black text-2xl font-bold mb-2'>{title}</h3>
      <p className='text-black text-sm'>{description}</p>
    </div>
  );
};

CardBody.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.element,
};
