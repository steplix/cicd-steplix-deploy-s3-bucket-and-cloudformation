import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import { useTranslation } from "@/common/lib/i18n";
import HeadTag from "@/common/components/HeadTag";
import Gradient from "@/common/components/Title/Gradient";
import BecomeCard from "@/common/components/BecomeCard";
import { BECOME_BENEFITS } from "@/common/utils/constants";
import CardContact from "@/common/components/CardContact";
import FlipCard from "@/common/components/FlipCard";
import { getPathSlugs } from "@/common/utils/getPathSlugs";
import { copyToClipboard, openLink } from "@/common/utils/methods";
import TransitionWrapper from "@/common/components/TransitionWrapper";
import { stagger } from "@/common/lib/animation";
import HighlightedText from "@/common/components/HighlightedText";

function BecomeSteplixerPage({ locale }) {
  const { t } = useTranslation(locale);
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  return (
    <>
      <HeadTag
        metaContent={{
          title: t("metaTags.becomeSteplixer.title"),
          description: t("metaTags.becomeSteplixer.description"),
          keywords: t("metaTags.becomeSteplixer.keywords"),
        }}
      />
      <TransitionWrapper className="section-container w-full container mx-auto flex-col">
        <Gradient
          borderPosition="left"
          borderWidth="border-2"
          content={t("BecomeSteplixerSection.title")}
          height="h-[32px]"
          size="text-[26px] lg:text-4xl"
          type="h1"
        />

        <div className="mt-10 mb lg:grid lg:grid-cols-2 lg:gap-x-6">
          {BECOME_BENEFITS.map((item) => (
            <BecomeCard
              key={item.icon}
              benefit={item.benefit}
              icon={item.icon}
              locale={locale}
            />
          ))}
        </div>

        <Gradient
          borderPosition="left"
          borderWidth="border-2"
          content={t("BecomeSteplixerSection.title2")}
          height="h-[32px] mt-[72px] mb-6 md:mb-8"
          size="text-[26px]"
        />
        <motion.div
          ref={ref}
          animate={controls}
          className="flex flex-col sm:flex-col-reverse md:flex-col space-y-4 sm:space-y-0 md:space-y-6 sm:gap-4 md:gap-0 items-center justify-center mb-8"
          initial="initial"
          variants={stagger}
        >
          <div className="flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-row items-center lg:space-x-4 gap-4">
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
          </div>
          <div className="flex flex-col sm:flex-row items-center lg:space-x-4 gap-4">
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
        <div className="mt-[72px] flex flex-col gap-2">
          <p className="font-sofia font-bold text-[26px] text-center text-purple">
            {t("BecomeSteplixerSection.sendCV.title")}
          </p>

          <p className="font-sofia font-bold text-[26px] text-center text-purple">
            {t("BecomeSteplixerSection.sendCV.subtitle")}
          </p>
        </div>
        <div className="mt-8 mb-[72px] w-[328px] mx-auto my-0">
          <CardContact
            email="people@steplix.com"
            imgAlt={t("BecomeSteplixerSection.imageAlt")}
            imgSrc={"/assets/img/become/josefina-salimei.webp"}
            name="Josefina"
            socialMediaAriaLabel={t(
              "BecomeSteplixerSection.socialMediaAriaLabel"
            )}
            surname="Salimei"
            onClickCopyButton={() => copyToClipboard("people@steplix.com")}
            onClickSocialMediaButton={() =>
              openLink(
                "https://www.linkedin.com/in/josefina-salimei-6b2b07138/"
              )
            }
          />
        </div>
      </TransitionWrapper>
    </>
  );
}

// eslint-disable-next-line no-unused-vars
export async function getStaticPaths(...args) {
  const pathsWithLocale = getPathSlugs();

  return {
    paths: pathsWithLocale,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      ...params,
    },
  };
}

export default BecomeSteplixerPage;
