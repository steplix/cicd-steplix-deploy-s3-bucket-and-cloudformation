import PropTypes from 'prop-types';

const PartnerCard = ({ imageUrl, imageAlt, imageHeight, cardHeight }) => {
  return (
    <div
      className={`flex w-full justify-center items-center bg-white rounded-[20px] ${cardHeight}`}
    >
      <img alt={imageAlt} className={imageHeight} src={imageUrl} />
    </div>
  );
};

PartnerCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  imageHeight: PropTypes.string.isRequired,
  cardHeight: PropTypes.string.isRequired,
};

export default PartnerCard;
