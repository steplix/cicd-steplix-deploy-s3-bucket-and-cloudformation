import React from 'react'
import CardIcon from '@/common/components/CardIcon'
import Title from '@/common/components/Title/Gradient';
import { LOCALE_SLUGS } from '@/common/utils/constants';
import PropTypes from "prop-types"; 
import { useTranslation } from "@/common/lib/i18n";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { stagger } from "@/common/lib/animation";
import ButtonBecomeSteplixer from "@/common/components/ButtonRaise";
import ValuesIcon from '@/common/components/Icon/icons/ValuesIcon';


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
            <Title content={t("about_us.ourValues.title")} borderPosition="left" height="h-9" size="text-[26px] lg:text-[32px]"/>
            <ValuesIcon />
            <p className="font-poppins text-sm lg:text-base font-normal text-black sm:my-6 my-6 mb-8">
                {t("about_us.ourValues.description")}
            </p>
            <motion.div className="flex flex-col sm:flex-row lg:flex-col space-y-4 sm:space-y-0 lg:space-y-6 sm:space-x-6 items-center justify-center mb-8" variants={stagger} initial="initial" animate={controls} ref={ref}>
                <div className="flex flex-row space-x-4 sm:space-x-6">
                    <CardIcon text={t("about_us.ourValues.trust")} iconName="trust" resize customClass='border border-blue shadow-tech-card' />
                    <CardIcon text={t("about_us.ourValues.mutualRespect")} iconName="mutualRespect" resize customClass='border border-blue shadow-tech-card'/>
                    <CardIcon text={t("about_us.ourValues.success")} iconName="success" resize customClass='border border-blue shadow-tech-card'/>
                </div>
                <div className="flex flex-row space-x-4 sm:space-x-6">
                    <CardIcon text={t("about_us.ourValues.awareness")} iconName="awareness" resize customClass='border border-blue shadow-tech-card'/>
                    <CardIcon text={t("about_us.ourValues.agility")} iconName="agility" resize customClass='border border-blue shadow-tech-card'/>
                </div>
            </motion.div>
            <ButtonBecomeSteplixer ariaLabel={t("navbar.item4.ariaLabel")} locale={locale} customStyles="h-[37px] my-4 mx-auto" i18nKeyText={"ButtonProject"} pathname="/contact" />
        </section>
    )
}

OurValues.propTypes = {
    locale: PropTypes.oneOf(LOCALE_SLUGS)
  }

export default OurValues