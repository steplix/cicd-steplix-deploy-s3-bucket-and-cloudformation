import PropTypes from 'prop-types';

const CardHero = ({ title, description, icon }) => {
  return (
    <div className="bg-white pt-4 pb-6 px-6 rounded-2xl w-[245px] flex flex-col gap-4 shadow-step-card">
      <span>{icon}</span>
      <div className='flex flex-col gap-2'>
        <span className="font-sofia text-xl leading-6 font-semibold">{title}</span>
        <span className="font-poppins text-black text-[13px] leading-[16.9px] font-normal">{description}</span>
      </div>
    </div>
  );
};

CardHero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default CardHero;
