import React from "react";
import { useTranslation } from "next-export-i18n";
import Carousel from "@/common/components/Carousel";

const HappyClients = () => {
    const { t } = useTranslation();
    return (
        <div className="section-steplix text-left" id="happy-clients">
            <h2 className="text-[30px] font-semibold text-white mb-10">
                {t("happyClients")}
            </h2>
            <Carousel />
        </div>
    );
};

export default HappyClients;
