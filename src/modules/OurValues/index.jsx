import CardIcon from '@/common/components/CardIcon'
import SidelinedGradientTitle from '@/common/components/SidelinedGradientTitle'
import { useTranslation } from "next-export-i18n";
import React from 'react'

const OurValues = () => {
    const { t } = useTranslation();

    return (
        <section className="flex flex-col space-y-6 lg:space-y-8">
            <SidelinedGradientTitle title={t("about_us.ourValues.title")} />
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

export default OurValues