import React from "react";
import Title from "@/common/components/Title/Gradient";
import PropTypes from "prop-types"; 
import parse from 'html-react-parser';
import { LOCALE_SLUGS } from '@/common/utils/constants';
import { useTranslation } from "@/common/lib/i18n";
import { useResponsive } from "@/common/hooks/useResponsive";

const OurSteps = ({ locale }) => {
  const { t } = useTranslation(locale);
  const { width } = useResponsive();

  const SUBTITLE_BREAKPOINT_WIDTH = 640;
  return (
    <section className="relative">
        {/* <div className="w-full bg-what-we-do-steps sm:bg-what-we-do-steps-sm lg:bg-what-we-do-steps-lg xl:bg-what-we-do-steps-xl bg-center bg-no-repeat absolute h-full -top-9 bg-origin-content" style={{ zIndex: -1 }} /> */}
        <div className="mt-6">
          <p className="font-poppins text-custom-base font-normal text-black">
            {t("what_we_do.stepsToTheTop.descriptionOne")}
          </p>
          <p className="font-poppins text-custom-base font-normal text-black">
            {t("what_we_do.stepsToTheTop.descriptionTwo")}
          </p>
          <p className="font-poppins text-custom-base font-bold text-black">
            {t("what_we_do.stepsToTheTop.descriptionThree")}
          </p>
        </div>
        <div className="max-w-[270px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[665px] xl:max-w-[834px] w-full mt-[49px] lg:mt-[72px]">
          {width < SUBTITLE_BREAKPOINT_WIDTH ? (
            <Title
              content={t("what_we_do.weExploreTheProyect.titleOne")}
              secondContent={t("what_we_do.weExploreTheProyect.titleTwo")}
              size="text-[26px]"
              underlineFixed
            />
          ) : (
            <Title
              content={t("what_we_do.weExploreTheProyect.fullTitle")}
              size="text-[26px]"
              underlineFixed
            />
          )}

          <div className="mt-6">
            <p className="font-poppins text-mobile lg:text-custom-base font-normal text-black">
              {t("what_we_do.weExploreTheProyect.descriptionOne")}
              <span className="font-poppins text-mobile lg:text-custom-base font-bold text-black">
                {t("what_we_do.weExploreTheProyect.descriptionTwo")}
              </span>
            </p>
          </div>
        </div>
        <div className="max-w-[270px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[665px] xl:max-w-[834px] w-full mt-[56px] xl:mt-16">
          {width < SUBTITLE_BREAKPOINT_WIDTH ? (
            <Title
              content={t("what_we_do.weDesignYourProduct.titleOne")}
              secondContent={t("what_we_do.weDesignYourProduct.titleTwo")}
              size="text-[26px]"
              underlineFixed
            />
          ) : (
            <Title
              content={t("what_we_do.weDesignYourProduct.fullTitle")}
              size="text-[26px]"
              underlineFixed
            />
          )}

          <div className="mt-6">
            <p className="font-poppins text-mobile lg:text-custom-base font-normal text-black">
                {parse(t("what_we_do.weDesignYourProduct.descriptionOne"))}
              <span className="font-poppins text-mobile lg:text-custom-base font-bold text-black">
                {t("what_we_do.weDesignYourProduct.descriptionTwo")}
              </span>
            </p>
          </div>
        </div>
        <div className="max-w-[270px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[665px] xl:max-w-[834px] w-full mt-[56px] xl:mt-16">
          {width < SUBTITLE_BREAKPOINT_WIDTH ? (
            <Title
              content={t("what_we_do.weDevelopTheSolution.titleOne")}
              secondContent={t("what_we_do.weDevelopTheSolution.titleTwo")}
              size="text-[26px]"
              underlineFixed
            />
          ) : (
            <Title
              content={t("what_we_do.weDevelopTheSolution.fullTitle")}
              size="text-[26px]"
              underlineFixed
            />
          )}

          <div className="pt-[24px]">
            <p className="font-poppins text-mobile lg:text-custom-base font-normal text-black">
              {t("what_we_do.weDevelopTheSolution.descriptionOne")}
              <span className="font-poppins text-mobile lg:text-custom-base font-bold text-black">
                {t("what_we_do.weDevelopTheSolution.descriptionTwo")}
              </span>
            </p>
          </div>
        </div>
    </section>
  );
};

OurSteps.propTypes = {
  locale: PropTypes.oneOf(LOCALE_SLUGS)
}

export default OurSteps;
