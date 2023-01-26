import React from "react";
import PropTypes from "prop-types"; 
import { LOCALE_SLUGS } from '@/common/utils/constants';
import { useTranslation } from "@/common/lib/i18n";
import { useResponsive } from "@/common/hooks/useResponsive";
import Title from "@/common/components/Title/Gradient";



const Intro = ({ locale }) => {
  const { t } = useTranslation(locale);
  const { width } = useResponsive();
  const TITLE_BREAKPOINT_WIDTH = 1024;
  
  return (
    <section className="w-full">
      {width < TITLE_BREAKPOINT_WIDTH ? (
          <Title
            content={t("what_we_do.stepsToTheTop.titleOne")}
            secondContent={t("what_we_do.stepsToTheTop.titleTwo")}
            borderPosition="left"
            size="text-[32px]"
            height="h-[80px]"
          />
        ) : (
          <Title
            content={t("what_we_do.stepsToTheTop.fullTitle")}
            borderPosition="left"
            size="text-[32px]"
            height="h-[40px]"
          />
        )}
      <p className="font-poppins text-mobile lg:text-custom-base font-normal text-black mt-6 w-full max-w-[328px] sm:max-w-[558px] lg:max-w-none">
        <strong>{t("what_we_do.intro.descriptionOne")}</strong>
        {(t("what_we_do.intro.descriptionTwo"))}
      </p>
    </section>
  );
};

Intro.propTypes = {
  locale: PropTypes.oneOf(LOCALE_SLUGS)
}

export default Intro;
