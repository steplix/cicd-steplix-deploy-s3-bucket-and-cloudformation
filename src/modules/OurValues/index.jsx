import React from "react";
import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import FlipCard from "@/common/components/FlipCard";
import Title from "@/common/components/Title/Gradient";
import { LOCALE_SLUGS } from "@/common/utils/constants";
import { useTranslation } from "@/common/lib/i18n";
import { stagger } from "@/common/lib/animation";
import ButtonBecomeSteplixer from "@/common/components/ButtonRaise";
import { ValuesIcon } from "@/common/components/Icon/icons";
import HighlightedText from "@/common/components/HighlightedText";

const OurValues = ({ locale }) => {
  const { t } = useTranslation(locale);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  return (
    <section className="flex flex-col">
      <div className=" flex gap-4 items-center">
        <Title
          borderPosition="left"
          content={t("about_us.ourValues.title")}
          height="h-9"
          size="text-[26px] lg:text-[32px]"
        />
        <ValuesIcon className={"h-10 w-10"} />
      </div>
      <p className="font-poppins text-sm lg:text-base font-normal text-black sm:my-6 my-6 mb-8">
        {t("about_us.ourValues.description")}
      </p>
      <motion.div
        ref={ref}
        animate={controls}
        initial="initial"
        variants={stagger}
      >
        <div className="flex flex-col gap-4 mb-8 sm:mb-6 lg:mb-10 sm:flex-row sm:justify-center sm:flex-wrap">
          <FlipCard
            resize
            description={
              <HighlightedText
                text={t("about_us.ourValues.trust.description")}
                sentencesToHighlight={t(
                  "about_us.ourValues.trust.highlightedSentences"
                )}
                highlightStyle="text--custom-primary"
              />
            }
            iconName="trust"
            title={t("about_us.ourValues.trust.title")}
          />
          <FlipCard
            resize
            description={
              <HighlightedText
                text={t("about_us.ourValues.mutualRespect.description")}
                sentencesToHighlight={t(
                  "about_us.ourValues.mutualRespect.highlightedSentences"
                )}
                highlightStyle="text--custom-primary"
              />
            }
            iconName="mutualRespect"
            title={t("about_us.ourValues.mutualRespect.title")}
          />
          <FlipCard
            resize
            description={
              <HighlightedText
                text={t("about_us.ourValues.success.description")}
                sentencesToHighlight={t(
                  "about_us.ourValues.success.highlightedSentences"
                )}
                highlightStyle="text--custom-primary"
              />
            }
            iconName="success"
            title={t("about_us.ourValues.success.title")}
          />
          <FlipCard
            resize
            description={
              <HighlightedText
                text={t("about_us.ourValues.awareness.description")}
                sentencesToHighlight={t(
                  "about_us.ourValues.awareness.highlightedSentences"
                )}
                highlightStyle="text--custom-primary"
              />
            }
            iconName="awareness"
            title={t("about_us.ourValues.awareness.title")}
          />
          <FlipCard
            resize
            description={
              <HighlightedText
                text={t("about_us.ourValues.agility.description")}
                sentencesToHighlight={t(
                  "about_us.ourValues.agility.highlightedSentences"
                )}
                highlightStyle="text--custom-primary"
              />
            }
            iconName="agility"
            title={t("about_us.ourValues.agility.title")}
          />
        </div>
      </motion.div>
      <ButtonBecomeSteplixer
        ariaLabel={t("navbar.item4.ariaLabel")}
        customStyles="h-[37px] mx-auto"
        i18nKeyText={"ButtonProject"}
        locale={locale}
        pathname="/contact"
      />
    </section>
  );
};

OurValues.propTypes = {
  locale: PropTypes.oneOf(LOCALE_SLUGS),
};

export default OurValues;
