import { PropTypes } from 'prop-types';
import parse from 'html-react-parser';

import Title from '@/common/components/Title/Gradient';
import { useTranslation } from '@/common/lib/i18n';
import ButtonCard from '@/common/components/ButtonCard';
import FlipCard from '@/common/components/FlipCard';
import Icon from '@/common/components/Icon';
import { FlipCardDescriptions } from '@/common/components/FlipCardDescription';
import ChipColorFilled from '@/common/components/Chip/ChipColorFilled';

export const WhatWeBuildSectionB = ({
  locale,
  imageClassname,
  children,
  whatWeBuildDescription,
  functionalities,
  imageFunctionalityClassname,
  productChips,
  products,
  quote,
}) => {
  const { t } = useTranslation(locale);

  return (
    <section className="flex flex-col gap-6 py-4" id="what-do-we-build">
      <Title
        underlineFixed
        borderPosition="bottom"
        content={t('portfolio.whatWeBuild')}
        size="text-[26px] lg:text-[32px]"
      />
      <div className="flex flex-col gap-6">
        <p className="font-poppins text-[13px] lg:text-base text-black">{whatWeBuildDescription}</p>
        <div className="flex flex-col gap-6 lg:flex-row justify-center text-base">{children}</div>
        <div className="flex gap-2 items-center">
          <Icon className="h-4 w-4 lg:w-6 lg:h-6" name="star" />
          <p className=" font-poppins font-semibold text-base lg:text-lg">
            {t('portfolio.someFunctionalities')}
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            {functionalities?.map((functionality, i) => {
              return (
                <div key={i} className="card-container">
                  <FlipCard
                    resize
                    withButton
                    cardHeight="h-[184px] sm:h-[217px] lg:h-[184px]"
                    description={
                      <FlipCardDescriptions
                        chips={functionality.description.chips}
                        description={parse(t(functionality.description.content))}
                      />
                    }
                    iconName={functionality.iconName}
                    locale={locale}
                    textClass="font-semibold text-[20px]"
                    title={t(functionality.label)}
                  />
                </div>
              );
            })}
            <div
              className={`hidden sm:block card-container lg:hidden ${imageFunctionalityClassname}`}
            />
          </div>
          <div
            className={`h-[212px] sm:hidden lg:block lg:h-[247px] lg:w-full ${imageFunctionalityClassname}`}
          />
        </div>
        <div className="flex flex-col gap-4 xl:gap-6">
          <div className="flex gap-2 items-center">
            <Icon className="h-4 w-4 lg:w-6 lg:h-6" name="star" />
            <p className=" font-poppins font-semibold text-base lg:text-lg">
              {t('portfolio.independentProducts')}
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <div className="flex flex-wrap gap-1 items-center justify-center sm:flex-col sm:card-container lg:w-full lg:flex-row xl:mb-4 xl:gap-2">
              {productChips.map((chip, i) => {
                return (
                  <ChipColorFilled
                    key={i}
                    borderWidth="1.5"
                    label={t(chip.label)}
                    labelColor="text-purple-dark"
                    outlineColor="border-purple-dark"
                    type="slim"
                  />
                );
              })}
            </div>
            {products?.map((product, i) => {
              return (
                <div key={i} className="card-container">
                  <FlipCard
                    resize
                    withButton
                    cardHeight="h-[184px] sm:h-[217px] lg:h-[184px]"
                    description={
                      <FlipCardDescriptions
                        chips={product.description.chips}
                        description={parse(t(product.description.content))}
                      />
                    }
                    iconName={product.iconName}
                    locale={locale}
                    textClass="font-semibold text-[20px]"
                    title={t(product.label)}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="pt-8 pb-4 flex flex-col gap-4">
          <p className=" font-sofia font-bold text-[26px] lg:text-5xl leading-9 sm:text-center text-blue">
            {t(quote.text)}
          </p>
          <div className="font-poppins w-full sm:text-center">
            <span className="font-semibold text-base text-black mr-2"> {t(quote.autor)}</span>
            <span className="font-normal text-[13px] leading-[16.9px] text-black mr-1">
              {t(quote.position)} -
            </span>
            <span className="font-normal text-[13px] leading-[16.9px] text-blue">
              {t(quote.companyName)}
            </span>
          </div>
        </div>
        <div>
          <div className={`h-[197px] sm:h-[360px] lg:h-[629px] xl:h-[678px] ${imageClassname}`} />
          <div className="w-full flex items-center justify-center mt-4">
            <ButtonCard
              clickEvent={() => {
                openLink('https://meetings.hubspot.com/jyanez1?embed=true');
              }}
              customImageClass="w-4 h-4 text-white"
              fontsize="text-[12px]"
              iconName="send"
              iconPosition="right"
              label={t('what_we_do.buttonModal')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

WhatWeBuildSectionB.propTypes = {
  locale: PropTypes.string.isRequired,
  imageClassname: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  whatWeBuildDescription: PropTypes.array.isRequired,
  functionalities: PropTypes.array.isRequired,
  imageFunctionalityClassname: PropTypes.string.isRequired,
  productChips: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired,
  quote: PropTypes.object.isRequired,
};
