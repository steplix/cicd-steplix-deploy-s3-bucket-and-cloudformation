import { PropTypes } from 'prop-types';

export const PortfolioHeader = ({ alt, src }) => {
  return (
    <div className="flex items-end h-[272px] sm:h-[290px] lg:h-[412px] mt-[-56px] sm:mt-[-62px] lg:mt-[-100px] header-gradient justify-center">
      <picture className="rounded-tl-[20px] rounded-tr-[20px] h-[197px] sm:h-[230px] lg:h-[321px] mb-[-16px] lg:mb-[-24px]">
        <img alt={alt} className="w-full h-full" src={src} />
      </picture>
    </div>
  );
};

PortfolioHeader.prototype = {
  alt: PropTypes.string,
  src: PropTypes.string,
};
