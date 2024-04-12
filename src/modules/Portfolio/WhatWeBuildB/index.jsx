import { PropTypes } from 'prop-types';

import Title from '@/common/components/Title/Gradient';
import { useTranslation } from '@/common/lib/i18n';
import ButtonCard from '@/common/components/ButtonCard';

export const WhatWeBuildSectionB = ({
  locale,
  imageClassname,
  children,
  whatWeBuildDescription,
}) => {
  const { t } = useTranslation(locale);

  return (
    <section className="flex flex-col gap-4 py-4" id="what-do-we-build">
      <Title
        underlineFixed
        borderPosition="bottom"
        content={t('portfolio.whatWeBuild')}
        size="text-[26px] lg:text-[32px]"
      />
      <div className="flex flex-col gap-6">
        <p className="font-poppins text-[13px] lg:text-base text-black">{whatWeBuildDescription}</p>
        <div className="flex flex-col gap-6 lg:flex-row justify-center text-base">{children}</div>
        {
          // TODO: seguir construyendo el resto del componente
        }
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
};
