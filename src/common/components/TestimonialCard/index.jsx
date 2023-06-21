import PropTypes from 'prop-types';
import { useTranslation } from 'next-export-i18n';

const TestimonialCard = ({
  clientImageUrl,
  clientFirstName,
  clientLastName,
  clientCompany,
  clientOpinion,
  clientPosition,
  imageAlt,
  textColor,
}) => {
  const { t } = useTranslation();

  return (
    <article className=" p-[23px] rounded-[20px] flex flex-col bg-white card-shadow text-black overflow-hidden transition-all duration-500 ease-in-out clients-card--inactive">
      <div className="flex flex-col justify-between pb-6">
        <div className="flex space-x-3 mb-[10px]">
          <img alt={imageAlt} className="w-[56px] h-[56px] rounded-full" src={clientImageUrl} />
          <div className="text-left">
            <h3 className="text-[26px] leading-none font-bold">{clientFirstName}</h3>
            <h3 className="text-[26px] leading-none font-bold">{clientLastName}</h3>
          </div>
        </div>
        <div className="flex text-[13px] font-medium md:text-base">
          {clientPosition} -<h4 className={`${textColor} font-bold pl-[4px]`}> {clientCompany} </h4>
        </div>
      </div>
      {/* TODO:: Modify to text mobile when the responsive and changes are applied on Figma */}
      <p className="text-xs leading-4">{t(clientOpinion)}</p>
    </article>
  );
};

TestimonialCard.propTypes = {
  clientFirstName: PropTypes.string.isRequired,
  clientLastName: PropTypes.string.isRequired,
  clientCompany: PropTypes.string.isRequired,
  clientOpinion: PropTypes.string.isRequired,
  clientImageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default TestimonialCard;

// h-[408px] w-[280px]
