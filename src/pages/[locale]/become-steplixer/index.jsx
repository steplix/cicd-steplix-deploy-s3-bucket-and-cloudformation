import { useTranslation } from "@/common/lib/i18n";
import { useEffect } from "react";
import { useAccordion } from "@/common/hooks/useAccordion";
import HeadTag from "@/common/components/HeadTag";
import Gradient from "@/common/components/Title/Gradient";
import BecomeCard from "@/common/components/BecomeCard";
import { BECOME_BENEFITS, OUR_VALUES } from "@/common/utils/constants";
import Accordion from "@/common/components/Accordion";
import TitleIcon from "@/common/components/Title/TitleIcon";
import CardContact from "@/common/components/CardContact";
import FlipCard from "@/common/components/FlipCard";
import { getPathSlugs } from "@/common/utils/getPathSlugs";
import { copyToClipboard, openLink } from "@/common/utils/methods";
import TransitionWrapper from "@/common/components/TransitionWrapper";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { stagger } from "@/common/lib/animation";

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
                    content={t("BecomeSteplixerSection.title")}
                    borderWidth="border-2"
                    size="text-[26px] lg:text-4xl"
                    height="h-[32px]"
                    type="h1"
                />

                <div className="mt-10 mb lg:grid lg:grid-cols-2 lg:gap-x-6">
                    {BECOME_BENEFITS.map((item) => (
                        <BecomeCard
                            key={item.icon}
                            icon={item.icon}
                            benefit={item.benefit}
                            locale={locale}
                        />
                    ))}
                </div>

                <Gradient
                    borderPosition="left"
                    content={t("BecomeSteplixerSection.title2")}
                    borderWidth="border-2"
                    size="text-[26px]"
                    height="h-[32px] mt-[72px] mb-6 md:mb-8"
                />
                {/* <Accordion chevron closeAccordion={closeAccordion} ref={ref}>
          {OUR_VALUES.map((item, index) => (
            <Accordion.Item key={index} id={index + 1}>
              <Accordion.Header>
                <TitleIcon
                  icon={item.icon}
                  title={t(`SteplixInternalValues.${item.value}.title`)}
                  spacing="gap-4"
                  titleSize="text-base"
                />
              </Accordion.Header>
              <Accordion.Body>
                <p className="mt-4">
                  {t(`SteplixInternalValues.${item.value}.description`)}
                </p>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion> */}
                <motion.div
                    className="flex flex-col sm:flex-col-reverse md:flex-col space-y-4 sm:space-y-0 md:space-y-6 sm:gap-4 md:gap-0 items-center justify-center mb-8"
                    variants={stagger}
                    initial="initial"
                    animate={controls}
                    ref={ref}
                >
                    <div className="flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-row items-center lg:space-x-4 gap-4">
                        <FlipCard
                            text={t("about_us.ourValues.trust.title")}
                            iconName="trust"
                            description={t(
                                "about_us.ourValues.trust.description"
                            )}
                            resize
                        />
                        <FlipCard
                            text={t("about_us.ourValues.mutualRespect.title")}
                            iconName="mutualRespect"
                            description={t(
                                "about_us.ourValues.mutualRespect.description"
                            )}
                            resize
                        />
                        <FlipCard
                            text={t("about_us.ourValues.success.title")}
                            description={t(
                                "about_us.ourValues.success.description"
                            )}
                            iconName="success"
                            resize
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row items-center lg:space-x-4 gap-4">
                        <FlipCard
                            text={t("about_us.ourValues.awareness.title")}
                            description={t(
                                "about_us.ourValues.awareness.description"
                            )}
                            iconName="awareness"
                            resize
                        />
                        <FlipCard
                            text={t("about_us.ourValues.agility.title")}
                            description={t(
                                "about_us.ourValues.agility.description"
                            )}
                            iconName="agility"
                            resize
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
                        name="Josefina"
                        surname="Salimei"
                        imgSrc={"/assets/img/become/josefina-salimei.webp"}
                        imgAlt={t("BecomeSteplixerSection.imageAlt")}
                        socialMediaAriaLabel={t(
                            "BecomeSteplixerSection.socialMediaAriaLabel"
                        )}
                        onClickCopyButton={() =>
                            copyToClipboard("people@steplix.com")
                        }
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
