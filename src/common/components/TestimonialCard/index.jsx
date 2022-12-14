/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types';

const Card = ({ clientImageUrl, clientFirstName, clientLastName, clientCompany, clientOpinion, clientPosition, imageAlt, textColor }) => {
  return (
    // Todo remover bordes de imagen y card, una vez que se defina el fondo / imagenes
    <article className="h-[365px] w-[280px] md:w-[488px] md:h-[268px] lg:h-[316px] lg:w-[376px] xl:h-[268px] xl:w-[488px] border p-[23px] rounded-[20px] flex flex-col">
      <div className="flex flex-col justify-between pb-6">
        <div className="flex">
          <img alt={imageAlt} className="w-[52px] h-[52px] rounded-full border bg-black" src={clientImageUrl} />
          <div className="pl-[18px] pb-[6px]">
            <h3 className="text-[26px] leading-none font-bold">{clientFirstName}</h3>
            <h3 className="text-[26px] leading-none font-bold">{clientLastName}</h3>
          </div>
        </div>
        <div className="flex">
          {clientPosition} en <h4 className={`${textColor} font-bold pl-[4px]`}> {clientCompany} </h4>
        </div>
      </div>
      <p className="text-xs leading-4">{clientOpinion}</p>
    </article>
  );
};

export default Card;

Card.propTypes = {
  clientFirstName: PropTypes.string.isRequired,
  clientLastName: PropTypes.string.isRequired,
  clientCompany: PropTypes.string.isRequired,
  clientOpinion: PropTypes.string.isRequired,
  clientImageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};
