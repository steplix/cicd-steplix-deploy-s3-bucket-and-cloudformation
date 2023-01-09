import React from 'react'
import CardIcon from '@/common/components/CardIcon'
import Title from '@/common/components/Title/Gradient';
import { LOCALE_SLUGS } from '@/common/utils/constants';
import PropTypes from "prop-types"; 
import { useTranslation } from "@/common/lib/i18n";

const OurValues = ({ locale }) => {
    const { t } = useTranslation(locale);

    return (
        <section className="flex flex-col space-y-6 lg:space-y-8">
            <Title content={t("about_us.ourValues.title")} borderPosition="left" height="h-9" size="text-[26px] lg:text-[32px]"/>
            <p className="font-poppins text-sm lg:text-base font-normal text-black">
                {t("about_us.ourValues.description")}
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center justify-center">
                <div className="flex flex-row space-x-4 md:space-x-6">
                    <CardIcon text={t("about_us.ourValues.trust")} iconName="trust" />
                    <CardIcon text={t("about_us.ourValues.mutualRespect")} iconName="mutualRespect" />
                    <CardIcon text={t("about_us.ourValues.success")} iconName="success" />
                </div>
                <div className="flex flex-row space-x-4 md:space-x-6">
                    <CardIcon text={t("about_us.ourValues.awareness")} iconName="awareness" />
                    <CardIcon text={t("about_us.ourValues.agility")} iconName="agility" />
                </div>
            </div>
        </section>
    )
}

OurValues.propTypes = {
    locale: PropTypes.oneOf(LOCALE_SLUGS)
  }

export default OurValues