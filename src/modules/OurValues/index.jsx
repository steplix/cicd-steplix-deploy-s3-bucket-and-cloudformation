import React from "react";
import FlipCard from "@/common/components/FlipCard";
import Title from "@/common/components/Title/Gradient";
import { LOCALE_SLUGS } from "@/common/utils/constants";
import PropTypes from "prop-types";
import { useTranslation } from "@/common/lib/i18n";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { stagger } from "@/common/lib/animation";
import ButtonBecomeSteplixer from "@/common/components/ButtonRaise";
import { ValuesIcon } from "@/common/components/Icon/icons";

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
                    content={t("about_us.ourValues.title")}
                    borderPosition="left"
                    height="h-9"
                    size="text-[26px] lg:text-[32px]"
                />
                <ValuesIcon className={"h-10 w-10"} />
            </div>
            <p className="font-poppins text-sm lg:text-base font-normal text-black sm:my-6 my-6 mb-8">
                {t("about_us.ourValues.description")}
            </p>
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
                        description={t("about_us.ourValues.trust.description")}
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
            <ButtonBecomeSteplixer
                ariaLabel={t("navbar.item4.ariaLabel")}
                locale={locale}
                customStyles="h-[37px] my-4 mx-auto"
                i18nKeyText={"ButtonProject"}
                pathname="/contact"
            />
        </section>
    );
};

OurValues.propTypes = {
    locale: PropTypes.oneOf(LOCALE_SLUGS),
};

export default OurValues;
