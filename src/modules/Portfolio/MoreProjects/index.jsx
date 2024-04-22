import { PropTypes } from 'prop-types';

import PortfolioCard from '@/common/components/PortfolioCard';
import PortfolioCarousel from '@/common/components/PortfolioCarousel';
import { PORTFOLIO_CARDS } from '@/common/utils/constants';
import Title from '@/common/components/Title/Gradient';
import { useTranslation } from '@/common/lib/i18n';

export const MoreProjectsSection = ({ locale }) => {
  const { t } = useTranslation(locale);

  return (
    <section className="flex flex-col pt-12 gap-4" id="what-do-we-build">
      <Title
        underlineFixed
        borderPosition="bottom"
        content={t('portfolio.moreProjects')}
        size="text-[26px] lg:text-[32px]"
      />
      <PortfolioCarousel carouselClassName={' sm:h-[500px]'}>
        {PORTFOLIO_CARDS.map(({ name, industryIconName, iconBrandClass }) => {
          return (
            <div
              key={name}
              className="keen-slider__slide rounded-[20px] flex justify-center items-center"
            >
              <PortfolioCard
                iconBrandClass={iconBrandClass}
                industryIconName={industryIconName}
                name={name}
              />
            </div>
          );
        })}
      </PortfolioCarousel>
    </section>
  );
};

MoreProjectsSection.propTypes = {
  locale: PropTypes.string.isRequired,
};
