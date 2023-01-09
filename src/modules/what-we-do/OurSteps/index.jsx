import React from "react";
import Title from "@/common/components/Title/Gradient";
import PropTypes from "prop-types"; 
import { LOCALE_SLUGS } from '@/common/utils/constants';
import { useTranslation } from "@/common/lib/i18n";
import { useResponsive } from "@/common/hooks/useResponsive";

const OurSteps = ({ locale }) => {
  const { t } = useTranslation(locale);
  const { width } = useResponsive();

  const TITLE_BREAKPOINT_WIDTH = 1024;
  const SUBTITLE_BREAKPOINT_WIDTH = 640;
  return (
    <section className=" pb-[270px] sm:pb-[490px] lg:pb-[610px] xl:pb-[670px]">
      <div className="pt-[32px] pb-[40px]">
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

        <div className="pt-[24px]">
          <p className="font-poppins lg:text-base font-normal text-black">
            {t("what_we_do.stepsToTheTop.descriptionOne")}
          </p>
          <p className="font-poppins lg:text-base font-normal text-black">
            {t("what_we_do.stepsToTheTop.descriptionTwo")}
          </p>
          <p className="font-poppins lg:text-base font-bold text-black">
            {t("what_we_do.stepsToTheTop.descriptionThree")}
          </p>
        </div>
      </div>
      <div className="space-y-14 xl:space-y-16">
        <div className="max-w-[270px] sm:max-w-[420px] lg:w-[665px] xl:w-[834px]">
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

          <div className="pt-[24px]">
            <p className="font-poppins text-sm lg:text-base font-normal text-black">
              {t("what_we_do.weExploreTheProyect.descriptionOne")}
              <span className="font-poppins text-sm lg:text-base font-bold text-black">
                {t("what_we_do.weExploreTheProyect.descriptionTwo")}
              </span>
            </p>
          </div>
        </div>
        <div className="max-w-[270px] sm:max-w-[420px] lg:max-w-[665px] xl:max-w-[834px]">
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

          <div className="pt-[24px]">
            <p className="font-poppins text-sm lg:text-base font-normal text-black">
              {t("what_we_do.weDesignYourProduct.descriptionOne")}
              <span className="font-poppins text-sm lg:text-base font-bold text-black">
                {t("what_we_do.weDesignYourProduct.descriptionTwo")}
              </span>
            </p>
          </div>
        </div>
        <div className="max-w-[280px] sm:max-w-[420px] lg:max-w-[665px] xl:max-w-[834px]">
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
            <p className="font-poppins text-sm lg:text-base font-normal text-black">
              {t("what_we_do.weDevelopTheSolution.descriptionOne")}
              <span className="font-poppins text-sm lg:text-base font-bold text-black">
                {t("what_we_do.weDevelopTheSolution.descriptionTwo")}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

OurSteps.propTypes = {
  locale: PropTypes.oneOf(LOCALE_SLUGS)
}

export default OurSteps;
