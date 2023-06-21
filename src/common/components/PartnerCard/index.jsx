import PropTypes from 'prop-types';
import { useTranslation } from 'next-export-i18n';

const PartnerCard = ({ imageUrl, imageAlt, description }) => {
  const { t } = useTranslation();

  return (
    <div
      className={
        'flex flex-col items-center justify-center lg:items-start w-[279px] h-[158px] sm:w-[270px] sm:h-[158px] lg:w-[438px] lg:h-[141px] xl:w-[552px] xl:h-[141px] shadow-tech-card bg-white p-6 rounded-[20px] space-y-6 partners-card--inactive transition-all duration-500 ease-in-out'
      }
    >
      <img alt={imageAlt} src={imageUrl} />
      <p className="text-xs leading-4 text-black">{t(description)}</p>
    </div>
  );
};

PartnerCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PartnerCard;
