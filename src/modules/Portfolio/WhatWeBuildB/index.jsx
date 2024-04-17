import { PropTypes } from 'prop-types';

import Title from '@/common/components/Title/Gradient';
import { useTranslation } from '@/common/lib/i18n';
import ButtonCard from '@/common/components/ButtonCard';
import FlipCard from '@/common/components/FlipCard';
import HighlightedText from '@/common/components/HighlightedText';
import Icon from '@/common/components/Icon';

export const WhatWeBuildSectionB = ({
  locale,
  imageClassname,
  children,
  whatWeBuildDescription,
  functionalities,
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
        <div className="flex flex-col gap-4">
          {functionalities &&
            functionalities.map(() => {
              return (
                <FlipCard
                  key={t('about_us.ourValues.trust.description')}
                  resize
                  withButton
                  cardHeight="h-[184px] sm:h-[217px] lg:h-[184px]"
                  description={
                    <HighlightedText
                      highlightStyle="text--custom-primary"
                      sentencesToHighlight={t('about_us.ourValues.trust.highlightedSentences')}
                      text={t('about_us.ourValues.trust.description')}
                    />
                  }
                  iconName="pig"
                  locale={locale}
                  title="sdasd"
                />
              );
            })}
        </div>
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
    </section>
  );
};

WhatWeBuildSectionB.propTypes = {
  locale: PropTypes.string.isRequired,
  imageClassname: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  whatWeBuildDescription: PropTypes.array.isRequired,
  functionalities: PropTypes.array.isRequired,
};
