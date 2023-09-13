import PropTypes from 'prop-types';
import { useTranslation } from 'next-export-i18n';

const PartnerCard = ({ imageUrl, imageAlt, description, customStyleDescription }) => {
  const { t } = useTranslation();

  return (
    <div
      className={
        'flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-6 xl:gap-10 bg-white px-8 py-7 xl:py-6 rounded-[20px] h-[10.25rem] lg:h-[6.75rem]'
      }
    >
      <img alt={imageAlt} className="h-[3.25rem]" src={imageUrl} />
      <p
        className={`font-poppins text-[13px] leading-[1.22rem] text-black ${customStyleDescription}`}
      >
        {t(description)}
      </p>
    </div>
  );
};

PartnerCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PartnerCard;
