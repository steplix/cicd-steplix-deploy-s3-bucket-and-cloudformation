import React from "react";
import { useTranslation } from "next-export-i18n";
import Carousel from "@/common/components/Carousel";

const HappyClients = () => {
    const { t } = useTranslation();
    return (
        <section className="w-[335px] lg:w-[1230px] text-left" id="clients">
            <h2 className="text-[24px] lg:text-[54px] text-white mb-10">
                {t("happyClients")}
            </h2>
            <Carousel />
        </section>
    );
};

export default HappyClients;
